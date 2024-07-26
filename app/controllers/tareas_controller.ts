import { HttpContext } from '@adonisjs/core/http'
import Tarea from '#models/tarea/tarea'
import db from '@adonisjs/lucid/services/db'

export default class TareasController {

  //show all tareas
  public async index({ response }: HttpContext) {
    const tareas = await Tarea.all()
    return response.json(tareas)
  }

  //create a new tarea
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'moduloId', 'total', 'subtotal', 'descuento'])
    const tarea = await Tarea.create(data)
    return response.json(tarea)
  }

  //show a tarea
  public async show({ params, response }: HttpContext) {
    const tarea = await Tarea.query()
      .preload('art_tareas', (query) => {
        query.select('id');
      })
      .where('id', params.id)
      .first()
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
    const data = request.only(['nombre', 'descripcion', 'total', 'subtotal', 'descuento'])
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
    tarea.habilitado = false;
    await tarea.save()
    return response.json(tarea)
  }

  //copiar tarea
  public async copy({ params, request, response }: HttpContext) {
    const tarea = await Tarea.find(params.id)
    if (!tarea) {
      return response.status(404).json({ error: 'Tarea not found' })
    }
    const moduloId = request.input('moduloId');
    const newTarea = new Tarea();
    newTarea.nombre = tarea.nombre;
    newTarea.descripcion = tarea.descripcion;
    newTarea.total = tarea.total;
    newTarea.moduloId = moduloId;
    await newTarea.save();
    return response.json(newTarea)
  }

  //Obtener modelo de tareas
  public async getTareasModel({ response }: HttpContext) {
    try {
      const tareasModelSchema = await db.rawQuery('DESCRIBE tareas');
      const filteredSchema = tareasModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ tareasModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }

  //Obtener campos editables de tareas
  public async getEditableFields({ response }: HttpContext) {
    const tarea = new Tarea()
    return response.json({ editableFields: tarea.editableFields })
  }
}