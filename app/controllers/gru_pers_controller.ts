import GruPer from '#models/personal/gru_per'
import { HttpContext } from '@adonisjs/core/http'

export default class GruPersController {
  public async index({ response }: HttpContext) {
    const gruPers = await GruPer.all()
    return response.json(gruPers)
  }

  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    const gruPer = await GruPer.create(data)
    return response.json(gruPer)
  }

  public async show({ params, response }: HttpContext) {
    const gruPer = await GruPer.find(params.id)
    if (!gruPer) {
      return response.status(404).json({ error: 'GruPer not found' })
    }
    return response.json(gruPer)
  }

  public async update({ params, request, response }: HttpContext) {
    const gruPer = await GruPer.find(params.id)
    if (!gruPer) {
      return response.status(404).json({ error: 'GruPer not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    gruPer.merge(data)
    await gruPer.save()
    return response.json(gruPer)
  }

  public async delete({ params, response }: HttpContext) {
    const gruPer = await GruPer.find(params.id)
    if (!gruPer) {
      return response.status(404).json({ error: 'GruPer not found' })
    }
    await gruPer.delete()
    return response.status(200).json({ message: 'GruPer deleted' })
  }
}