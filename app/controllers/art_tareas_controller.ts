import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import { HttpContext } from '@adonisjs/core/http'

export default class ArtTareasController {
  public async index({ response }: HttpContext) {
    const artTareas = await ArtTarea.query().preload('articulo').preload('tarea')
    return response.json(artTareas)
  }

  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'heredaMed', 'cantidad'])
    const artTarea = await ArtTarea.create(data)
    await artTarea.load('articulo')
    await artTarea.load('tarea')
    return response.json(artTarea)
  }

  public async show({ params, response }: HttpContext) {
    const artTarea = await ArtTarea.query().where('id', params.id).preload('articulo').preload('tarea').first()
    if (!artTarea) {
      return response.status(404).json({ error: 'ArtTarea not found' })
    }
    return response.json(artTarea)
  }

  public async update({ params, request, response }: HttpContext) {
    const artTarea = await ArtTarea.find(params.id)
    if (!artTarea) {
      return response.status(404).json({ error: 'ArtTarea not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'heredaMed', 'cantidad'])
    artTarea.merge(data)
    await artTarea.save()
    await artTarea.load('articulo')
    await artTarea.load('tarea')
    return response.json(artTarea)
  }

  public async delete({ params, response }: HttpContext) {
    const artTarea = await ArtTarea.find(params.id)
    if (!artTarea) {
      return response.status(404).json({ error: 'ArtTarea not found' })
    }
    await artTarea.delete()
    return response.status(200).json({ message: 'ArtTarea deleted' })
  }
}