import { http, createConfig } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { getDefaultConfig } from "connectkit";


export const envConfig = {
  contractAddr: '0x6D3cdF3112267f255d568A6683a9Fc9Daea69024',

  // Pinata
  pinataGatewayURL: 'bronze-clumsy-dingo-246.mypinata.cloud',
  pinataGatewayKey: '0e8zw_IVSuebJU9eZHO6ODYFIBj6u5wrYR0bzSIPSaiDv_yo490GP59WR7QVaScs'
}

export const config = createConfig(
  getDefaultConfig({
    chains: [baseSepolia, base],
    transports: {
      [baseSepolia.id]: http(),
      [base.id]: http(),
    },

    walletConnectProjectId: '11aa4949cca946ac595d755c2101d3be',

    // Required App Info
    appName: "Farcaster Group Buy",

    // Optional App Info
    appDescription: "Farcaster Group Buy",
    appUrl: "https://couponcast.xyz",
    appIcon: "https://couponcast.xyz/logo.png",
  })
)