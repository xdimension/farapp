import { http, createConfig } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { getDefaultConfig } from "connectkit";


export const envConfig = {
  appUrl: import.meta.env.VITE_APP_BASE_URL,
  castUrl: import.meta.env.VITE_CAST_BASE_URL,

  contractAddr: import.meta.env.VITE_CONTRACT_ADDR,

  // Pinata
  pinataGatewayURL: import.meta.env.PINATA_GATEWAY_URL,
  pinataGatewayKey: import.meta.env.PINATA_GATEWAY_KEY
}

export const config = createConfig(
  getDefaultConfig({
    chains: [baseSepolia, base],
    transports: {
      [baseSepolia.id]: http(),
      [base.id]: http(),
    },

    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,

    // Required App Info
    appName: import.meta.env.VITE_APP_NAME,
  })
)