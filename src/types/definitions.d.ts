import 'styled-components'
import { theme } from '@gnosis.pm/safe-react-components'

type Theme = typeof theme

export {}
declare global {
  interface Window {
    ethereum?: {
      autoRefreshOnNetworkChange: boolean
      isMetaMask: boolean
    }
    testAccountIndex?: string | number
  }
}
declare module '@openzeppelin/contracts/build/contracts/ERC721'
declare module 'currency-flags/dist/currency-flags.min.css'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}