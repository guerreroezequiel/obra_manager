/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'// Import the ClientesController class
import ClientesController from '#controllers/clientes_controller'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// router.get('/', async ({ view }) => {
//   return view.render('welcome')
// })
 // Fetch all clients
 //router.get('clientes', '#ClientesController.index') // Fetch a client by ID
 router.get('clientes', [ClientesController, 'index']) // Create a new client
// router.put('clientes/:id', [ClientesController, 'update']) // Update a client by ID
// router.delete('clientes/:id', [ClientesController, 'destroy']) // Delete a client by ID


