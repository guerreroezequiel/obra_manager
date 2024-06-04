import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

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

  //Obtener modelo de artTareas
  public async getArtTareasModel({ response }: HttpContext) {
    try {
      const artTareasModelSchema = await db.rawQuery('DESCRIBE art_tareas');
      const filteredSchema = artTareasModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ artTareasModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }
}