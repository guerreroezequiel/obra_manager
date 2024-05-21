import { HttpContext } from '@adonisjs/core/http'
import Obra from '#models/obra/obra'

export default class ObrasController {

    // List all obras
  public async index({ response }: HttpContext) {
    const obras = await Obra.all()
    return response.json(obras)
  }

    // Create a new obra
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    const obra = await Obra.create(data)
    return response.json(obra)
  }

    // Show obra by id
  public async show({ params, response }: HttpContext) {
    const obra = await Obra.find(params.id)
    if (!obra) {
      return response.status(404).json({ error: 'Obra not found' })
    }
    return response.json(obra)
  }

    // Update obra data
  public async update({ params, request, response }: HttpContext) {
    const obra = await Obra.find(params.id)
    if (!obra) {
      return response.status(404).json({ error: 'Obra not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    obra.merge(data)
    await obra.save()
    return response.json(obra)
  }

    // Delete obra
  public async delete({ params, response }: HttpContext) {
    const obra = await Obra.find(params.id)
    if (!obra) {
      return response.status(404).json({ error: 'Obra not found' })
    }
    await obra.delete()
    return response.status(200).json({ message: 'Obra deleted' })
  }
}