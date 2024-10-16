import { usePage } from '@inertiajs/react'
import { ConnectKitButton } from 'connectkit'

type User = {
  username: string
}
export function AvatarComponent() {
  const { user } = usePage<{ user: User }>().props

  return (
    <div className="fixed top-0 h-[70px]  w-full right-0 bg-slate-50 border border-b-2 pr-10 flex items-center justify-end">
      <div className="space-y-1 font-medium">
        <div>
          Welcome {user?.username}
          <ConnectKitButton theme="midnight" />
        </div>
      </div>
    </div>
  )
}
