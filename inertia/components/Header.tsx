import {
  MegaMenu,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'flowbite-react'
import LogoutComponent from './Logout'
import { Link, usePage } from '@inertiajs/react'

type User ={
  id: number
  username: string
  email: string
  roleId: number
  created_at: string
  updated_at: string
}
function HeaderComponent() {
  const { isLoggedIn, user } = usePage<{user:User,isLoggedIn:boolean}>().props

  return (
    <MegaMenu>
      <NavbarBrand href="/">
        {/* <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MyApp
        </span>
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <Link href="/">Home</Link>

        {isLoggedIn && (user.roleId == 2) && (
          <Link href="/admin">Admin Panel</Link>
        )}
        {isLoggedIn && (
          <Link href="/user/profile" className="mr-3">{user.username}</Link>
        )}
        {isLoggedIn && user ? (
          <LogoutComponent />
        ) : (
          <Link href="/login">Login</Link>
        )}
      </NavbarCollapse>
    </MegaMenu>
  )
}

export default HeaderComponent
