import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  public async index({ inertia, response, auth }: HttpContext) {
    let isLoggedIn = false
    let user = null

    await auth.check()
    if(auth.isAuthenticated){
      isLoggedIn = true
      user = auth.user
    }

    if (isLoggedIn) {
      return response.redirect('/admin')
    }

    return response.redirect('/login')

    // return inertia.render('home', { isLoggedIn, user });
  }
}