import addresses from 'config/constants/contracts'

import { GRAPH_API_PREDICTION_YAK, GRAPH_API_PREDICTION_BNB } from 'config/constants/endpoints'
import { getAddress } from 'utils/addressHelpers'
import { bscTokens } from 'config/constants/tokens'
import { BigNumber } from '@ethersproject/bignumber'

const DEFAULT_MIN_PRICE_USD_DISPLAYED = BigNumber.from(10000)

export default {
  EVT: {
    address: getAddress(addresses.predictionsBNB),
    api: GRAPH_API_PREDICTION_BNB,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleBNB),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: bscTokens.bnb,
  },
  YAK: {
    address: getAddress(addresses.predictionsYAK),
    api: GRAPH_API_PREDICTION_YAK,
    chainlinkOracleAddress: getAddress(addresses.chainlinkOracleYAK),
    minPriceUsdDisplayed: DEFAULT_MIN_PRICE_USD_DISPLAYED,
    token: bscTokens.cake,
  },
}
