/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import SessionController from '#controllers/session_controller'
import UsersController from '#controllers/users_controller'
// import { middleware } from './kernel.js'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//SESSION
router.post('/login', [SessionController, 'store'])
router.post('/logout', [SessionController, 'destroy'])

//USERS
router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])
router.post('/users', [UsersController, 'store'])
router.put('/users/:id', [UsersController, 'update'])  
router.delete('/users/:id', [UsersController, 'destroy'])


// router.post('login', async ({ request }) => {
//   const credentials = request.only(['email', 'password'])

//   console.log(credentials)
// })

