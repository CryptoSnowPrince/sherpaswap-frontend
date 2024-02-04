import { StaticJsonRpcProvider } from '@ethersproject/providers'

// export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'http://158.69.35.30:8545'
export const BSC_PROD_NODE = 'http://158.69.35.30:8545'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
