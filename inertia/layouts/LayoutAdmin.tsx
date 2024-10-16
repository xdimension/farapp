import { useEffect, useState } from 'react'
import { DrawerComponent } from '~/components/Drawer'
import { AvatarComponent } from '~/components/HeaderInfo'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '../web3config'
import { ConnectKitProvider } from 'connectkit'

type LayoutMainProps = {
  children: React.ReactNode
}
function LayoutAdmin({ children }: LayoutMainProps) {
  const [isClient, setIsClient] = useState(false)

  const queryClient = new QueryClient()

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ConnectKitProvider>
        <div>
          {isClient && (
            <>
              <AvatarComponent />
              <DrawerComponent />
              <div className=" md:pl-[300px] pl-10 pr-10 pt-[100px] py-[30px] ">{children}</div>
            </>
          )}
        </div>
      </ConnectKitProvider>
    </QueryClientProvider>
    </WagmiProvider>
  )
}

export default LayoutAdmin
