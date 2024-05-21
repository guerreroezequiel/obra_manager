import { HttpContext } from '@adonisjs/core/http'
import Tarea from '#models/tarea/tarea'
import Articulo from '#models/articulo/articulo'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'

export default class ArtTareasController {
  public async index({ response }: HttpContext) {
    const artTareas = await ArtTarea.query().preload('tarea').preload('articulo')
    return response.json(artTareas)
  }

  public async create({ request, response }: HttpContext) {
    const tareaId = request.input('tarea_id')
    const articuloId = request.input('articulo_id')
    const tarea = await Tarea.find(tareaId)
    const articulo = await Articulo.find(articuloId)

    if (!tarea || !articulo) {
      return response.status(404).json({ error: 'Tarea or Articulo not found' })
    }

    const artTarea = new ArtTarea()
    artTarea.related('tarea').associate(tarea)
   // artTarea.related('articulo').associate(articulo)   REVISAR PORQUE NO SE ASOCIA, IA lo tiro asi
    await artTarea.save()

    return response.json(artTarea)
  }

  public async show({ params, response }: HttpContext) {
    const artTarea = await ArtTarea.query().where('id', params.id).preload('tarea').preload('articulo').first()
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

    const tareaId = request.input('tarea_id')
    const articuloId = request.input('articulo_id')
    const tarea = await Tarea.find(tareaId)
    const articulo = await Articulo.find(articuloId)

    if (!tarea || !articulo) {
      return response.status(404).json({ error: 'Tarea or Articulo not found' })
    }

    artTarea.related('tarea').associate(tarea)
  //  artTarea.related('articulo').associate(articulo)      REVISAR PORQUE NO SE ASOCIA, IA lo tiro asi
    await artTarea.save()

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