import { Bet, BetPosition, Round, PredictionUser } from 'state/types'
import numberOrNull from 'utils/numberOrNull'

import { RoundResponseYAK } from './cakeQueries'

const getRoundPosition = (positionResponse: string) => {
  if (positionResponse === 'Bull') {
    return BetPosition.BULL
  }

  if (positionResponse === 'Bear') {
    return BetPosition.BEAR
  }

  if (positionResponse === 'House') {
    return BetPosition.HOUSE
  }

  return null
}

export const transformBetResponseYAK = (betResponse): Bet => {
  const bet = {
    id: betResponse.id,
    hash: betResponse.hash,
    block: numberOrNull(betResponse.block),
    amount: betResponse.amount ? parseFloat(betResponse.amount) : 0,
    position: betResponse.position === 'Bull' ? BetPosition.BULL : BetPosition.BEAR,
    claimed: betResponse.claimed,
    claimedAt: numberOrNull(betResponse.claimedAt),
    claimedBlock: numberOrNull(betResponse.claimedBlock),
    claimedHash: betResponse.claimedHash,
    claimedBNB: betResponse.claimedYAK ? parseFloat(betResponse.claimedYAK) : 0,
    claimedNetBNB: betResponse.claimedNetYAK ? parseFloat(betResponse.claimedNetYAK) : 0,
    createdAt: numberOrNull(betResponse.createdAt),
    updatedAt: numberOrNull(betResponse.updatedAt),
  } as Bet

  if (betResponse.user) {
    bet.user = transformUserResponseYAK(betResponse.user)
  }

  if (betResponse.round) {
    bet.round = transformRoundResponseYAK(betResponse.round)
  }

  return bet
}

export const transformUserResponseYAK = (userResponse): PredictionUser => {
  const {
    id,
    createdAt,
    updatedAt,
    block,
    totalBets,
    totalBetsBull,
    totalBetsBear,
    totalYAK,
    totalYAKBull,
    totalYAKBear,
    totalBetsClaimed,
    totalYAKClaimed,
    winRate,
    averageYAK,
    netYAK,
  } = userResponse || {}

  return {
    id,
    createdAt: numberOrNull(createdAt),
    updatedAt: numberOrNull(updatedAt),
    block: numberOrNull(block),
    totalBets: numberOrNull(totalBets),
    totalBetsBull: numberOrNull(totalBetsBull),
    totalBetsBear: numberOrNull(totalBetsBear),
    totalBNB: totalYAK ? parseFloat(totalYAK) : 0,
    totalBNBBull: totalYAKBull ? parseFloat(totalYAKBull) : 0,
    totalBNBBear: totalYAKBear ? parseFloat(totalYAKBear) : 0,
    totalBetsClaimed: numberOrNull(totalBetsClaimed),
    totalBNBClaimed: totalYAKClaimed ? parseFloat(totalYAKClaimed) : 0,
    winRate: winRate ? parseFloat(winRate) : 0,
    averageBNB: averageYAK ? parseFloat(averageYAK) : 0,
    netBNB: netYAK ? parseFloat(netYAK) : 0,
  }
}

export const transformRoundResponseYAK = (roundResponse: RoundResponseYAK): Round => {
  const {
    id,
    epoch,
    failed,
    position,
    startAt,
    startBlock,
    startHash,
    lockAt,
    lockBlock,
    lockHash,
    lockPrice,
    lockRoundId,
    closeAt,
    closeBlock,
    closeHash,
    closePrice,
    closeRoundId,
    totalBets,
    totalAmount,
    bullBets,
    bullAmount,
    bearBets,
    bearAmount,
    bets = [],
  } = roundResponse

  return {
    id,
    failed,
    startHash,
    lockHash,
    lockRoundId,
    closeRoundId,
    closeHash,
    position: getRoundPosition(position),
    epoch: numberOrNull(epoch),
    startAt: numberOrNull(startAt),
    startBlock: numberOrNull(startBlock),
    lockAt: numberOrNull(lockAt),
    lockBlock: numberOrNull(lockBlock),
    lockPrice: lockPrice ? parseFloat(lockPrice) : 0,
    closeAt: numberOrNull(closeAt),
    closeBlock: numberOrNull(closeBlock),
    closePrice: closePrice ? parseFloat(closePrice) : 0,
    totalBets: numberOrNull(totalBets),
    totalAmount: totalAmount ? parseFloat(totalAmount) : 0,
    bullBets: numberOrNull(bullBets),
    bullAmount: bullAmount ? parseFloat(bullAmount) : 0,
    bearBets: numberOrNull(bearBets),
    bearAmount: bearAmount ? parseFloat(bearAmount) : 0,
    bets: bets.map(transformBetResponseYAK),
  }
}
