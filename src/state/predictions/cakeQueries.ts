import { UserResponse, BetResponse, HistoricalBetResponse, RoundResponse } from './responseType'

export interface UserResponseYAK extends UserResponse<BetResponseYAK> {
  totalYAK: string
  totalYAKBull: string
  totalYAKBear: string
  averageYAK: string
  totalYAKClaimed: string
  netYAK: string
}

export interface BetResponseYAK extends BetResponse {
  claimedYAK: string
  claimedNetYAK: string
  user?: UserResponseYAK
  round?: RoundResponseYAK
}

export type HistoricalBetResponseYAK = HistoricalBetResponse<UserResponseYAK>

export type RoundResponseYAK = RoundResponse<BetResponseYAK>

export interface TotalWonMarketResponseYAK {
  totalYAK: string
  totalYAKTreasury: string
}

/**
 * Base fields are the all the top-level fields available in the api. Used in multiple queries
 */
export const roundBaseFields = `
  id
  epoch
  position
  failed
  startAt
  startBlock
  startHash
  lockAt
  lockBlock
  lockHash
  lockPrice
  lockRoundId
  closeAt
  closeBlock
  closeHash
  closePrice
  closeRoundId
  totalBets
  totalAmount
  bullBets
  bullAmount
  bearBets
  bearAmount
`

export const betBaseFields = `
 id
 hash  
 amount
 position
 claimed
 claimedAt
 claimedHash
 claimedBlock
 claimedYAK
 claimedNetYAK
 createdAt
 updatedAt
`

export const userBaseFields = `
  id
  createdAt
  updatedAt
  block
  totalBets
  totalBetsBull
  totalBetsBear
  totalYAK
  totalYAKBull
  totalYAKBear
  totalBetsClaimed
  totalYAKClaimed
  winRate
  averageYAK
  netYAK
`
