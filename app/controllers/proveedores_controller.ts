import { HttpContext } from '@adonisjs/core/http'
import Proveedor from '#models/proveedor/proveedor'

export default class ProveedorsController {

    //show all proveedores
  public async index({ response }: HttpContext) {
    const proveedors = await Proveedor.all()
    return response.json(proveedors)
  }

  //create a new proveedor
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'mail', 'tel', 'habilitado', 'direccion', 'descripcion'])
    const proveedor = await Proveedor.create(data)
    return response.json(proveedor)
  }

  //show a proveedor
  public async show({ params, response }: HttpContext) {
    const proveedor = await Proveedor.find(params.id)
    if (!proveedor) {
      return response.status(404).json({ error: 'Proveedor not found' })
    }
    return response.json(proveedor)
  }

  //update a proveedor
  public async update({ params, request, response }: HttpContext) {
    const proveedor = await Proveedor.find(params.id)
    if (!proveedor) {
      return response.status(404).json({ error: 'Proveedor not found' })
    }
    const data = request.only(['nombre', 'mail', 'tel', 'habilitado', 'direccion', 'descripcion'])
    proveedor.merge(data)
    await proveedor.save()
    return response.json(proveedor)
  }

  //delete a proveedor
  public async delete({ params, response }: HttpContext) {
    const proveedor = await Proveedor.find(params.id)
    if (!proveedor) {
      return response.status(404).json({ error: 'Proveedor not found' })
    }
    await proveedor.delete()
    return response.status(200).json({ message: 'Proveedor deleted' })
  }
}