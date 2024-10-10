import { TabsMenu } from '~/components/Tabs'
import LayoutMain from '~/layouts/LayoutMain'
import UserProfile from '~/components/UserProfile'

type User = {
  id: number
  email: string
  username: string
  roleId: number
  created_at: string
  updated_at: string
}
type HomeProps = {
  isLoggedIn: boolean
  user: User
}

function Profile({ isLoggedIn, user }: HomeProps) {
  return (
    <LayoutMain isLoggedIn={isLoggedIn} user={user}>
      <TabsMenu activeTab='profile' />
      <UserProfile />
    </LayoutMain>
  )
}

export default Profile
