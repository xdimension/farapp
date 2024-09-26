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
import ProductController from '#controllers/product_controller'
import CategoryController from '#controllers/category_controller'

// router.on('/').renderInertia('home', { version: 6 })
router.get('/', [HomeController, 'index'])

router.get('/profile', [ProfileController, 'index']).use(middleware.auth())
router.put('/update-profile', [ProfileController, 'update']).use(middleware.auth())
router.delete('/delete-profile', [ProfileController, 'delete']).use(middleware.auth())

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])

router.get('/login', [LoginController, 'show'])
router.post('/login', [LoginController, 'store'])

router.get('/logout', [LogoutController, 'handle'])


// FRONTEND routers

router.get('/product', [ProductController, 'showProducts'])
router.get('/product/:id', [ProductController, 'showProductDetail'])


// ADMIN routers

router.group(() => {
  router
    .get('/', [DashboardController, 'index'])
    .as('admin')

  router
    .get('/users', [UserController, 'index'])
    .as('admin.users')

  router.put('/users/update-role', [UserController, 'updateRole'])

  router
    .get('/product', [ProductController, 'index'])
    .as('admin.products')

  router
    .get('/product/create', [ProductController, 'showCreate'])
    .as('admin.products.create')

  router
    .get('/product/update/:id', [ProductController, 'showUpdate'])
    .as('admin.products.update')

  router
    .post('/product/create', [ProductController, 'createProduct'])

  router
    .put('/product/update', [ProductController, 'updateProduct'])

  router
    .delete('/products/delete', [ProductController, 'deleteProduct'])
    .as('admin.products.delete')

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

