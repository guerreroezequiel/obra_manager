import { HttpContext } from '@adonisjs/core/http'
import Etapa from '#models/etapa/etapa'
import db from '@adonisjs/lucid/services/db'
import Modulo from '#models/modulo/modulo'
import Tarea from '#models/tarea/tarea'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'

export default class EtapasController {

  // List all etapas
  public async index({ response }: HttpContext) {
    const etapas = await Etapa.all()
    return response.json(etapas)
  }

  // Create a new etapa
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'obraId'])
    const etapa = await Etapa.create(data)
    return response.json(etapa)
  }


  // Show etapa by id
  public async show({ params, response }: HttpContext) {
    const etapa = await Etapa.query()
      .preload('modulos', (query) => {
        query.select('id');
      })
      .where('id', params.id)
      .first()
    if (!etapa) {
      return response.status(404).json({ error: 'Etapa not found' })
    }
    return response.json(etapa)
  }

  // Update etapa data
  public async update({ params, request, response }: HttpContext) {
    const etapa = await Etapa.find(params.id)
    if (!etapa) {
      return response.status(404).json({ error: 'Etapa not found' })
    }
    const data = request.only(['nombre', 'descripcion',])
    etapa.merge(data)
    await etapa.save()
    return response.json(etapa)
  }

  // Delete etapa
  public async delete({ params, response }: HttpContext) {
    try {
      const etapa = await Etapa.find(params.id)
      if (!etapa) {
        return response.status(404).json({ error: 'Etapa not found' })
      }

      // Obtener los módulos asociados a la etapa
      const modulos = await Modulo.query().where('etapaId', etapa.id)

      for (const modulo of modulos) {
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
      }

      // Eliminar la etapa
      await etapa.delete()

      return response.json({ message: 'Etapa deleted successfully' })
    } catch (error) {
      console.error('Error deleting etapa:', error)
      return response.status(500).json({ error: error.message })
    }
  }


  //Obtener modelo de etapas
  public async getEtapasModel({ response }: HttpContext) {
    try {
      const etapasModelSchema = await db.rawQuery('DESCRIBE etapas');
      const filteredSchema = etapasModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ etapasModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }

  //Obtener campos editables de etapas
  public async getEditableFields({ response }: HttpContext) {
    const etapa = new Etapa()
    return response.json(etapa.editableFields)
  }


}