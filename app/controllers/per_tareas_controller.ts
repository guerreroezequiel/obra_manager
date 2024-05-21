import PerTarea from '#models/tarea/det_tarea/per_tarea'
import { HttpContext } from '@adonisjs/core/http'

export default class PerTareasController {
  public async index({ response }: HttpContext) {
    const perTareas = await PerTarea.query().preload('personal').preload('tarea')
    return response.json(perTareas)
  }

  public async create({ request, response }: HttpContext) {
    const data = request.only(['personal_id', 'tarea_id'])
    const perTarea = await PerTarea.create(data)
    await perTarea.load('personal')
    await perTarea.load('tarea')
    return response.json(perTarea)
  }

  public async show({ params, response }: HttpContext) {
    const perTarea = await PerTarea.query().where('id', params.id).preload('personal').preload('tarea').first()
    if (!perTarea) {
      return response.status(404).json({ error: 'PerTarea not found' })
    }
    return response.json(perTarea)
  }

  public async update({ params, request, response }: HttpContext) {
    const perTarea = await PerTarea.find(params.id)
    if (!perTarea) {
      return response.status(404).json({ error: 'PerTarea not found' })
    }
    const data = request.only(['personal_id', 'tarea_id'])
    perTarea.merge(data)
    await perTarea.save()
    await perTarea.load('personal')
    await perTarea.load('tarea')
    return response.json(perTarea)
  }

  public async delete({ params, response }: HttpContext) {
    const perTarea = await PerTarea.find(params.id)
    if (!perTarea) {
      return response.status(404).json({ error: 'PerTarea not found' })
    }
    await perTarea.delete()
    return response.status(200).json({ message: 'PerTarea deleted' })
  }
}