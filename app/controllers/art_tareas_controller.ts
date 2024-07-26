import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class ArtTareasController {

  //mostrar todos los articulos de todas las tareas
  public async index({ response }: HttpContext) {
    const artTareas = await ArtTarea.query()
    return response.json(artTareas)
  }

  //mostrar articulos de una tarea
  public async getArticuloFromTarea({ response, params }: HttpContext) {
    const artTareas = await ArtTarea.query()
      .where('tareaId', params.id)

    return response.json(artTareas)
  }


  //crear tareas de un articulo
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'cantidad', 'precioUnitario', 'descuento', 'subtotal', 'total', 'uniMedId', 'tareaId', 'articuloId'])
    const artTarea = await ArtTarea.create(data)
    await artTarea.load('articulo')
    await artTarea.load('tarea')
    return response.json(artTarea)
  }

  //mostrar articulo de una tarea
  public async show({ params, response }: HttpContext) {
    const artTarea = await ArtTarea.query().where('id', params.id).first()
    if (!artTarea) {
      return response.status(404).json({ error: 'ArtTarea not found' })
    }
    return response.json(artTarea)
  }

  //actualizar articulo de una tarea
  public async update({ params, request, response }: HttpContext) {
    const artTarea = await ArtTarea.find(params.id)
    if (!artTarea) {
      return response.status(404).json({ error: 'ArtTarea not found' })
    }
    const data = request.only(['articuloNombre', 'descripcion', 'cantidad', 'descuento', 'subtotal', 'total', 'precioUnitario', 'uniMedId'])
    artTarea.merge(data)
    await artTarea.save()
    await artTarea.load('articulo')
    await artTarea.load('tarea')
    return response.json(artTarea)
  }

  //eliminar articulo de una tarea
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

  //Obtener campos editables de artTareas
  public async getEditableFields({ response }: HttpContext) {
    const artTarea = new ArtTarea();
    return response.json(artTarea.editableFields);
  }
}