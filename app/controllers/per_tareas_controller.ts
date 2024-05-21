import { HttpContext } from '@adonisjs/core/http'
import Tarea from '#models/tarea/tarea'
import Personal from '#models/personal/personal'
import PerTarea from '#models/tarea/det_tarea/per_tarea'

export default class PerTareasController {
  public async index({ response }: HttpContext) {
    const perTareas = await PerTarea.query().preload('personal').preload('tarea')
    return response.json(perTareas)
  }

  public async create({ request, response }: HttpContext) {
    const personalId = request.input('personal_id')
    const tareaId = request.input('tarea_id')
    const personal = await Personal.find(personalId)
    const tarea = await Tarea.find(tareaId)

    if (!personal || !tarea) {
      return response.status(404).json({ error: 'Personal or Tarea not found' })
    }

    const perTarea = new PerTarea()
  // perTarea.related('personal').associate(personal)
    perTarea.related('tarea').associate(tarea)
    await perTarea.save()

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

    const personalId = request.input('personal_id')
    const tareaId = request.input('tarea_id')
    const personal = await Personal.find(personalId)
    const tarea = await Tarea.find(tareaId)

    if (!personal || !tarea) {
      return response.status(404).json({ error: 'Personal or Tarea not found' })
    }

   // perTarea.related('personal').associate(personal)
    perTarea.related('tarea').associate(tarea)
    await perTarea.save()

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