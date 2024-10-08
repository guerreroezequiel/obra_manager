import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import Modulo from '#models/modulo/modulo'
import Tarea from '#models/tarea/tarea'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'

export default class ModulosController {
  // List all modulos
  public async index({ response }: HttpContext) {
    const modulos = await Modulo.all()
    return response.json(modulos)
  }

  // Create a new modulo
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'etapaId'])
    const modulo = await Modulo.create(data)
    return response.json(modulo)
  }

  // Show modulo by id
  public async show({ params, response }: HttpContext) {
    const modulo = await Modulo.query()
      .preload('tareas', (query) => {
        query.select('id');
      })
      .where('id', params.id)
      .first()
    if (!modulo) {
      return response.status(404).json({ error: 'Modulo not found' })
    }
    return response.json(modulo)
  }

  // Update modulo data
  public async update({ params, request, response }: HttpContext) {
    const modulo = await Modulo.find(params.id)
    if (!modulo) {
      return response.status(404).json({ error: 'Modulo not found' })
    }
    const data = request.only(['nombre', 'descripcion',])
    modulo.merge(data)
    await modulo.save()
    return response.json(modulo)
  }

  // Delete modulo
  public async delete({ params, response }: HttpContext) {
    try {
      const modulo = await Modulo.find(params.id)
      if (!modulo) {
        return response.status(404).json({ error: 'Modulo not found' })
      }

      // Obtener las tareas asociadas al módulo
      const tareas = await Tarea.query().where('moduloId', modulo.id)

      for (const tarea of tareas) {
        // Eliminar las art_tareas asociadas a la tarea
        await ArtTarea.query().where('tareaId', tarea.id).delete()
        // Eliminar la tarea
        await tarea.delete()
      }

      // Eliminar el módulo
      await modulo.delete()

      return response.json({ message: 'Modulo deleted successfully' })
    } catch (error) {
      console.error('Error deleting modulo:', error)
      return response.status(500).json({ error: error.message })
    }
  }


  //Obtener modelo de modulos
  public async getModulosModel({ response }: HttpContext) {
    try {
      const modulosModelSchema = await db.rawQuery('DESCRIBE modulos');
      const filteredSchema = modulosModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ modulosModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }

}