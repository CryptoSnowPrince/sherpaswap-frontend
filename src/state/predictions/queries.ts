import {
  roundBaseFields as roundBaseFieldsBNB,
  betBaseFields as betBaseFieldsBNB,
  userBaseFields as userBaseFieldsBNB,
} from './bnbQueries'
import {
  roundBaseFields as roundBaseFieldsYAK,
  betBaseFields as betBaseFieldsYAK,
  userBaseFields as userBaseFieldsYAK,
} from './cakeQueries'

export const getRoundBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'YAK' ? roundBaseFieldsYAK : roundBaseFieldsBNB

export const getBetBaseFields = (tokenSymbol: string) => (tokenSymbol === 'YAK' ? betBaseFieldsYAK : betBaseFieldsBNB)

export const getUserBaseFields = (tokenSymbol: string) =>
  tokenSymbol === 'YAK' ? userBaseFieldsYAK : userBaseFieldsBNB
