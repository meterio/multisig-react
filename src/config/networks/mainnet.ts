import HarmonyLogo from 'src/config/assets/token-one.png'
import { EnvironmentSettings, HARMONY_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  txServiceUrl: 'http://13.213.151.70:8000/api/v1',
  safeAppsUrl: 'https://multisig.harmony.one',
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: 'https://rpctest.meter.io',
  networkExplorerName: 'Meter Explorer',
  networkExplorerUrl: 'https://explorer-warringstakes.meter.io/#',
  networkExplorerApiUrl: 'https://api.etherscan.io/api',
}

const mainnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: 'https://multisig.harmony.one',
    },
    production: {
      ...baseConfig,
      txServiceUrl: 'https://multisig.t.hmny.io/api/v1',
      safeAppsUrl: 'https://multisig.harmony.one',
    },
  },
  network: {
    id: HARMONY_NETWORK.MAINNET,
    backgroundColor: '#E8E7E6',
    textColor: '#001428',
    label: 'Mainnet',
    isTestNet: false,
    nativeCoin: {
      address: '0x000',
      name: 'Meter',
      symbol: 'MTR',
      decimals: 18,
      logoUri: HarmonyLogo,
    },
  },
}

export default mainnet
