import PerTarea from '#models/tarea/det_tarea/per_tarea'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PerTareasController {

  //mostrar todas perTareas
  public async index({ response }: HttpContext) {
    const perTareas = await PerTarea.query().preload('personal')
    return response.json(perTareas)
  }

  //crear perTarea
  // public async create({ request, response }: HttpContext) {
  //   const data = request.only(['personal_id', 'tarea_id'])
  //   const perTarea = await PerTarea.create(data)
  //   await perTarea.load('personal')
  //   await perTarea.load('tarea')
  //   return response.json(perTarea)
  // }

  //mostrar personal de tarea 
  public async getPersonalFromTarea({ params, response }: HttpContext) {
    try {
      const perTareas = await PerTarea.query()
        .preload('personal')
        .where('tareaId', params.id)

      if (!perTareas || perTareas.length === 0) {
        return response.status(404).json({ message: 'Tarea no encontrada' })
      }

      const personalIds = perTareas.map(perTarea => perTarea.personalId)

      return response.json(personalIds)
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error })
    }
  }

  //mostrar pertarea por id
  public async show({ params, response }: HttpContext) {
    const perTarea = await PerTarea.find(params.id)
    if (!perTarea) {
      return response.status(404).json({ error: 'PerTarea not found' })
    }
    await perTarea.load('personal')
    // await perTarea.load('tarea')
    return response.json(perTarea)
  }

  //actualizar perTarea
  public async update({ params, request, response }: HttpContext) {
    const perTarea = await PerTarea.find(params.id)
    if (!perTarea) {
      return response.status(404).json({ error: 'PerTarea not found' })
    }
    const data = request.only(['personal_id', 'tarea_id'])
    const updatedData = {
      personalId: data.personal_id,
      tareaId: data.tarea_id
    }
    perTarea.merge(updatedData)
    await perTarea.save()
    await perTarea.load('personal')
    // await perTarea.load('tarea')
    return response.json(perTarea)
  }

  //borrar perTarea
  public async delete({ params, response }: HttpContext) {
    const perTarea = await PerTarea.find(params.id)
    if (!perTarea) {
      return response.status(404).json({ error: 'PerTarea not found' })
    }
    await perTarea.delete()
    return response.status(200).json({ message: 'PerTarea deleted' })
  }

  //Obtener modelo de perTareas
  public async getPerTareasModel({ response }: HttpContext) {
    try {
      const perTareasModelSchema = await db.rawQuery('DESCRIBE per_tareas');
      const filteredSchema = perTareasModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
          Extra: field.Extra,
        }))
      return response.json(filteredSchema)
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}