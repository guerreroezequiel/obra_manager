import Cliente from '#models/cliente/cliente'
import { HttpContext } from '@adonisjs/core/http'




export default class ClientesController {
  public async index({}: HttpContext) {
    const clientes = Cliente.all()
    
    return clientes
  }

  async store({ request }: HttpContext) {
    const { name, email } = request.only(['name', 'email']) // Get the name and email from the request
    const cliente = await Cliente.create({ nombre: name, mail: email }) // Create a new client using the 'Cliente' class
    return cliente
  }

  // async update({ params, request }: HttpContext) {
  // const data = request.only(['name', 'email']) // Get the name and email from the request
  // const cliente = await Cliente.findOrFail(params.id) // Find a client by ID using the 'Cliente' class or throw an error if not found
  // cliente.merge(data.email) // Update the client with the new data
  // await cliente.save() // Save the changes
  // return cliente
  // }
  
  // async destroy({ params }: HttpContext) {
  // const cliente = await Cliente.findOrFail(params.id) // Find a client by ID using the 'Cliente' class or throw an error if not found
  // await cliente.delete() // Delete the client
  // return cliente
  // }
}

