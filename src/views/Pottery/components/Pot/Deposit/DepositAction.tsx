import styled from 'styled-components'
import { useState, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Flex, Box, Button, Text, HelpIcon, useTooltip, LogoRoundIcon, Skeleton, InputProps } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import BigNumber from 'bignumber.js'
import { usePotteryData, useLatestVaultAddress } from 'state/pottery/hook'
import { Input as NumericalInput } from 'components/CurrencyInputPanel/NumericalInput'
import { YAK } from 'config/constants/tokens'
import useTokenBalance from 'hooks/useTokenBalance'
import { getFullDisplayBalance, getBalanceNumber } from 'utils/formatBalance'
import { PotteryDepositStatus } from 'state/types'
import { useUserEnoughCakeValidator } from 'views/Pools/components/LockedPool/hooks/useUserEnoughCakeValidator'
import { BIG_TEN } from 'utils/bigNumber'
import EnableButton from './EnableButton'
import DepositButton from './DepositButton'

const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  z-index: 1;
`

const Container = styled.div<InputProps>`
  border-radius: 16px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme, isWarning }) => (isWarning ? theme.shadows.warning : theme.shadows.inset)};
`

interface DepositActionProps {
  totalValueLockedValue: number
}

const DepositAction: React.FC<React.PropsWithChildren<DepositActionProps>> = ({ totalValueLockedValue }) => {
  const { t } = useTranslation()
  const { chainId } = useWeb3React()
  const { publicData, userData } = usePotteryData()
  const lastVaultAddress = useLatestVaultAddress()
  const [depositAmount, setDepositAmount] = useState('')

  const maxTotalDepositToNumber = getBalanceNumber(publicData.maxTotalDeposit)
  const remainingCakeCanStake = new BigNumber(maxTotalDepositToNumber).minus(totalValueLockedValue).toString()

  const { balance: userCake } = useTokenBalance(YAK[chainId]?.address)
  const userCakeDisplayBalance = getFullDisplayBalance(userCake, 18, 3)
  const { userNotEnoughCake, notEnoughErrorMessage } = useUserEnoughCakeValidator(depositAmount, userCake)

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(
      'YAK deposit will be diverted to the fixed-term staking pool. Please note that YAK deposited can ONLY be withdrawn after 10 weeks.',
    ),
    {
      placement: 'bottom',
    },
  )

  const onClickMax = () => {
    const userCakeBalance = userCake.dividedBy(BIG_TEN.pow(18)).toString()

    if (new BigNumber(userCakeBalance).gte(remainingCakeCanStake)) {
      setDepositAmount(remainingCakeCanStake)
    } else {
      setDepositAmount(userCakeBalance)
    }
  }

  const showMaxButton = useMemo(
    () => new BigNumber(depositAmount).multipliedBy(BIG_TEN.pow(18)).eq(userCake),
    [depositAmount, userCake],
  )

  const isLessThanOneCake = useMemo(() => new BigNumber(depositAmount).lt(1), [depositAmount])

  const isReachMaxAmount = useMemo(() => {
    return (
      new BigNumber(totalValueLockedValue).eq(maxTotalDepositToNumber) || new BigNumber(remainingCakeCanStake).lt(1)
    )
  }, [maxTotalDepositToNumber, totalValueLockedValue, remainingCakeCanStake])

  if (userData.isLoading) {
    return <Skeleton width="100%" height="48px" />
  }

  if (userData.allowance.isLessThanOrEqualTo(0)) {
    return <EnableButton potteryVaultAddress={lastVaultAddress} />
  }

  if (publicData.getStatus !== PotteryDepositStatus.BEFORE_LOCK) {
    return (
      <Button disabled mt="10px" width="100%">
        {t('Deposit closed until next Pottery')}
      </Button>
    )
  }

  if (isReachMaxAmount) {
    return (
      <Button disabled mt="10px" width="100%">
        {t('Max. deposit cap reached')}
      </Button>
    )
  }

  return (
    <Box>
      <Box mb="4px">
        <Text fontSize="12px" color="secondary" textTransform="uppercase" bold as="span">
          {t('Deposit')}
        </Text>
        <Text fontSize="12px" ml="4px" color="textSubtle" bold as="span">
          YAK
        </Text>
      </Box>
      <InputPanel>
        <Container isWarning={isLessThanOneCake}>
          <Text fontSize="14px" color="textSubtle" mb="12px" textAlign="right">
            {t('Balance: %balance%', { balance: userCakeDisplayBalance })}
          </Text>
          <Flex mb="6.5px">
            <NumericalInput
              style={{ textAlign: 'left' }}
              className="pottery-amount-input"
              value={depositAmount}
              onUserInput={(val) => setDepositAmount(val)}
            />
            <Flex ml="8px">
              {!showMaxButton && (
                <Button onClick={onClickMax} scale="xs" variant="secondary" style={{ alignSelf: 'center' }}>
                  {t('Max').toUpperCase()}
                </Button>
              )}
              <LogoRoundIcon m="0 4px" width="24px" height="24px" />
              <Text>YAK</Text>
            </Flex>
          </Flex>
        </Container>
        {isLessThanOneCake && (
          <Text color="failure" fontSize="14px" textAlign="right">
            {t('Please deposit at least 1 YAK to participate in the Pottery')}
          </Text>
        )}
      </InputPanel>
      <Flex>
        <Flex ml="auto">
          <Text fontSize="12px" color="textSubtle">
            {t('Deposited YAK will be locked for 10 weeks')}
          </Text>
          <Flex ref={targetRef}>
            {tooltipVisible && tooltip}
            <HelpIcon ml="4px" width="20px" height="20px" color="textSubtle" />
          </Flex>{' '}
        </Flex>
      </Flex>
      {userNotEnoughCake ? (
        <Button disabled mt="10px" width="100%">
          {notEnoughErrorMessage}
        </Button>
      ) : (
        <DepositButton
          status={publicData.getStatus}
          depositAmount={depositAmount}
          potteryVaultAddress={lastVaultAddress}
          setDepositAmount={setDepositAmount}
        />
      )}
    </Box>
  )
}

export default DepositAction
