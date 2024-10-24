import type { HttpContext } from '@adonisjs/core/http'
import Roles from '../enums/role.js'

export default class HomeController {
  public async index({ inertia, response, auth }: HttpContext) {
    let isLoggedIn = false
    let user = null

    await auth.check()
    if(auth.isAuthenticated){
      isLoggedIn = true
      user = auth.user
    }

    if (isLoggedIn && user.roleId == Roles.ADMIN) {
      return response.redirect('/admin')
    }

    return inertia.render('home', { isLoggedIn, user });
  }
}