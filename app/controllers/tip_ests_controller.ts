import TipEstado from '#models/estado/tip_est'
import { HttpContext } from '@adonisjs/core/http'

export default class TipEstadosController {

    // List all tipEstados
  public async index({ response }: HttpContext) {
    const tipEstados = await TipEstado.all()
    return response.json(tipEstados)
  }

    // Create a new tipEstado
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'habilitado'])
    const tipEstado = await TipEstado.create(data)
    return response.json(tipEstado)
  }

    // Show tipEstado by id
  public async show({ params, response }: HttpContext) {
    const tipEstado = await TipEstado.find(params.id)
    if (!tipEstado) {
      return response.status(404).json({ error: 'TipEstado not found' })
    }
    return response.json(tipEstado)
  }

    // Update tipEstado data
  public async update({ params, request, response }: HttpContext) {
    const tipEstado = await TipEstado.find(params.id)
    if (!tipEstado) {
      return response.status(404).json({ error: 'TipEstado not found' })
    }
    const data = request.only(['nombre', 'habilitado'])
    tipEstado.merge(data)
    await tipEstado.save()
    return response.json(tipEstado)
  }

    // Delete tipEstado
  public async delete({ params, response }: HttpContext) {
    const tipEstado = await TipEstado.find(params.id)
    if (!tipEstado) {
      return response.status(404).json({ error: 'TipEstado not found' })
    }
    await tipEstado.delete()
    return response.status(200).json({ message: 'TipEstado deleted' })
  }
}