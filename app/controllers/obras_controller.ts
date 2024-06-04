import { HttpContext } from '@adonisjs/core/http'
import Obra from '#models/obra/obra'
import db from '@adonisjs/lucid/services/db'


export default class ObrasController {

  // List all obras
  public async index({ response }: HttpContext) {
    const obras = await Obra.all()
    return response.json(obras)
  }

  // Create a new obra
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    const obra = await Obra.create(data)
    return response.json(obra)
  }

  // Show obra by id
  public async show({ params, response }: HttpContext) {
    const obra = await Obra.find(params.id)
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
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
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
  async getObraWithDetails({ params, response }: HttpContext) {

    try {
      const obra = await Obra.query()
        .where('id', params.id)
        .select('id', 'nombre')
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



}