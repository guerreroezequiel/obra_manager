import { HttpContext } from '@adonisjs/core/http'
import Tarea from '#models/tarea/tarea'

export default class TareasController {

    //show all tareas
  public async index({ response }: HttpContext) {
    const tareas = await Tarea.all()
    return response.json(tareas)
  }

    //create a new tarea
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'condicion', 'condBool', 'heredaMed'])
    const tarea = await Tarea.create(data)
    return response.json(tarea)
  }

    //show a tarea
  public async show({ params, response }: HttpContext) {
    const tarea = await Tarea.find(params.id)
    if (!tarea) {
      return response.status(404).json({ error: 'Tarea not found' })
    }
    return response.json(tarea)
  }

    //update a tarea
  public async update({ params, request, response }: HttpContext) {
    const tarea = await Tarea.find(params.id)
    if (!tarea) {
      return response.status(404).json({ error: 'Tarea not found' })
    }
    const data = request.only(['nombre',  'descripcion', 'condicion', 'condBool', 'heredaMed'])
    tarea.merge(data)
    await tarea.save()
    return response.json(tarea)
  }

    //delete a tarea
  public async delete({ params, response }: HttpContext) {
    const tarea = await Tarea.find(params.id)
    if (!tarea) {
      return response.status(404).json({ error: 'Tarea not found' })
    }
    await tarea.delete()
    return response.status(200).json({ message: 'Tarea deleted' })
  }
}