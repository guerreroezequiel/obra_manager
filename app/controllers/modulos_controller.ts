import { HttpContext } from '@adonisjs/core/http'
import Etapa from '#models/etapa/etapa'

export default class EtapasController {

    // List all etapas
  public async index({ response }: HttpContext) {
    const etapas = await Etapa.all()
    return response.json(etapas)
  }

  // Create a new etapa
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'area', 'habilitado', 'heredaMed'])
    const etapa = await Etapa.create(data)
    return response.json(etapa)
  }

    // Show etapa by id
  public async show({ params, response }: HttpContext) {
    const etapa = await Etapa.find(params.id)
    if (!etapa) {
      return response.status(404).json({ error: 'Etapa not found' })
    }
    return response.json(etapa)
  }

    // Update etapa data
  public async update({ params, request, response }: HttpContext) {
    const etapa = await Etapa.find(params.id)
    if (!etapa) {
      return response.status(404).json({ error: 'Etapa not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'area', 'habilitado', 'heredaMed'])
    etapa.merge(data)
    await etapa.save()
    return response.json(etapa)
  }

    // Delete etapa
  public async delete({ params, response }: HttpContext) {
    const etapa = await Etapa.find(params.id)
    if (!etapa) {
      return response.status(404).json({ error: 'Etapa not found' })
    }
    await etapa.delete()
    return response.status(200).json({ message: 'Etapa deleted' })
  }
}