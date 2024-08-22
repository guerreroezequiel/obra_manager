import { HttpContext } from '@adonisjs/core/http'
import Obra from '#models/obra/obra'
import db from '@adonisjs/lucid/services/db'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import Tarea from '#models/tarea/tarea'
import Modulo from '#models/modulo/modulo'
import Etapa from '#models/etapa/etapa'


export default class ObrasController {

  // List all obras
  public async index({ response }: HttpContext) {
    const obras = await Obra.all()
    return response.json(obras)
  }

  // Create a new obra
  public async create({ request, response }: HttpContext) {
    const data = request.only(['codigo', 'direccion', 'medida',])
    const obra = await Obra.create(data)
    return response.json(obra)
  }

  // Show obra by id
  public async show({ params, response }: HttpContext) {
    const obra = await Obra.query()
      .preload('etapas', (query) => {
        query.select('id');
      })
      .where('id', params.id)
      .first()
    if (!obra) {
      return response.status(404).json({ error: 'Obra not found 1' })
    }
    return response.json(obra)
  }

  // Update obra data
  public async update({ params, request, response }: HttpContext) {
    const obra = await Obra.find(params.id)
    if (!obra) {
      return response.status(404).json({ error: 'Obra not found 2' })
    }
    const data = request.only(['codigo', 'direccion', 'medida', 'clienteId', 'descuento', 'subtotal', 'total'])
    obra.merge(data)
    await obra.save()
    return response.json(obra)
  }

  // Delete obra
  public async delete({ params, response }: HttpContext) {
    const obra = await Obra.find(params.id)
    if (!obra) {
      return response.status(404).json({ error: 'Obra not found 3' })
    }

    // Obtener las etapas asociadas a la obra
    const etapas = await Etapa.query().where('obraId', obra.id)

    for (const etapa of etapas) {
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
    }

    // Eliminar la obra
    await obra.delete()

    return response.status(200).json({ message: 'Obra deleted' })
  }
  //Obtener modelo de obra
  public async getObraModel({ response }: HttpContext) {
    try {
      const obraModelSchema = await db.rawQuery('DESCRIBE obras');
      const filteredSchema = obraModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ obraModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }



  //Asociaciones de obra
  async getObraRelations({ params, response }: HttpContext) {

    try {
      const obra = await Obra.query()
        .where('id', params.id)
        .select('id', 'codigo')
        .preload('etapas', (etapaQuery) => {
          etapaQuery.select('id', 'nombre').preload('modulos', (modulosQuery) => {
            modulosQuery.select('id', 'nombre').preload('tareas', (tareasQuery) => {
              tareasQuery.select('id', 'nombre');
            });
          });
        })
        .first();

      if (!obra) {
        return response.status(404).json({ message: 'Obra no encontrada' });
      }
      return response.json({ obra });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }

  //FULL obra
  async getObraFullDetails({ params, response }: HttpContext) {
    try {
      const obra = await Obra.query()
        .where('id', params.id)
        .select('*')
        .preload('etapas', (etapaQuery) => {
          etapaQuery.select('*').preload('modulos', (modulosQuery) => {
            modulosQuery.select('*').preload('tareas', (tareasQuery) => {
              tareasQuery.select('*');
            });
          });
        })
        .first();

      if (!obra) {
        return response.status(404).json({ message: 'Obra no encontrada' });
      }
      return response.json({ obra });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }

  //FULL obra
  async getObraPresupuesto({ params, response }: HttpContext) {
    try {
      const obra = await Obra.query()
        .where('id', params.id)
        .select('*')
        .preload('etapas', (etapaQuery) => {
          etapaQuery.select('*').preload('modulos', (modulosQuery) => {
            modulosQuery.select('*').preload('tareas', (tareasQuery) => {
              tareasQuery.select('*').preload('art_tareas', (artTareasQuery) => {
                artTareasQuery.select('*');
              });
            });
          });
        })
        .first();

      if (!obra) {
        return response.status(404).json({ message: 'Obra no encontrada' });
      }
      return response.json({ obra });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }


  //Obtener campos editables de artTareas
  public async getEditableFields({ response }: HttpContext) {
    const obra = new Obra();
    return response.json(obra.editableFields);
  }

}