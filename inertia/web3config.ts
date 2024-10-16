import { http, createConfig } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { getDefaultConfig } from "connectkit";


export const contractAddr = '0xd425f95801397b0D4A5D535E88a8d6F4935eC1eB'

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
    appUrl: "https://farbuy.xyz", // your app's url
    appIcon: "https://farbuy.xyz/logo.png",
  })
)