/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import HomeController from '#controllers/home_controller'
import RegisterController from '#controllers/auth/register_controller'
import LoginController from '#controllers/auth/login_controller'
import LogoutController from '#controllers/auth/logout_controller'
import ProfileController from '#controllers/profile_controller'
import DashboardController from '#controllers/admin/dashboard_controller'
import UserController from '#controllers/admin/user_controller'
import CategoryController from '#controllers/category_controller'
import CouponController from '#controllers/coupon_controller'

// router.on('/').renderInertia('home', { version: 6 })
router.get('/', [HomeController, 'index'])

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])

router.get('/login', [LoginController, 'show'])
router.post('/login', [LoginController, 'store'])

router.get('/logout', [LogoutController, 'handle'])


// USER DASHBOARD routers

router.group(() => {
  router.get('/profile', [ProfileController, 'index'])
  router.put('/update-profile', [ProfileController, 'update'])
  router.delete('/delete-profile', [ProfileController, 'delete'])

})
.prefix('user')
.use(middleware.auth())

router.group(() => {
  router.get('promo-img/:cid', [CouponController, 'promoImageUrl'])
})
.use(middleware.auth())

// ADMIN routers

router.group(() => {

  router
    .get('/', [DashboardController, 'index'])
    .as('admin')

  router
    .get('/users', [UserController, 'index'])
    .as('admin.users')

  router.put('/users/update-role', [UserController, 'updateRole'])

  // COUPONS route
  router
    .get('/coupons', [CouponController, 'index'])
    .as('admin.coupons')

  router
    .post('/coupons/create', [CouponController, 'create'])

  router
    .put('/coupons/update', [CouponController, 'update'])

  router
    .delete('/coupons/delete', [CouponController, 'delete'])
    .as('admin.coupons.delete')

  router
    .get('/coupons/search', [CouponController, 'searchCoupon'])
    .as('admin.coupons.search')

  router
    .post('/api/coupons/uploadimage', [CouponController, 'uploadImage'])
    .as('admin.coupons.uploadimage')


  // CATEGORIES (sample route)
  router
    .get('/categories', [CategoryController, 'index'])
    .as('admin.categories')

  router
    .post('/categories/create', [CategoryController, 'create'])

  router
    .put('/categories/update', [CategoryController, 'update'])

  router
    .delete('/categories/delete', [CategoryController, 'delete'])
    .as('admin.categories.delete')

  router
    .get('/categories/search', [CategoryController, 'searchCategory'])
    .as('admin.categories.search')

})
.use(middleware.admin())
.prefix('/admin')

