import Cliente from '#models/cliente/cliente'
import { HttpContext } from '@adonisjs/core/http'

export default class ClientesController {

  //show all clientes
  public async index({ response }: HttpContext) {
    const clientes = await Cliente.all()
    return response.json(clientes)
  }

  //create new cliente
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'mail', 'tel', 'direccion', 'habilitado', 'descripcion'])
    const cliente = await Cliente.create(data)
    return response.json(cliente)
  }

  //show cliente by id
  public async show({ params, response }: HttpContext) {
    const cliente = await Cliente.find(params.id)
    if (!cliente) {
      return response.status(404).json({ error: 'Cliente not found' })
    }
    return response.json(cliente)
  }

  //update cliente data
  public async update({ params, request, response }: HttpContext) {
    const cliente = await Cliente.find(params.id)
    if (!cliente) {
      return response.status(404).json({ error: 'Cliente not found' })
    }
    const data = request.only(['nombre', 'mail', 'tel', 'direccion', 'habilitado', 'descripcion'])
    cliente.merge(data)
    await cliente.save()
    return response.json(cliente)
  }

  //delete cliente
  public async delete({ params, response }: HttpContext) {
    const cliente = await Cliente.find(params.id)
    if (!cliente) {
      return response.status(404).json({ error: 'Cliente not found' })
    }
    await cliente.delete()
    return response.status(200).json({ message: 'Cliente deleted' })
  }
}