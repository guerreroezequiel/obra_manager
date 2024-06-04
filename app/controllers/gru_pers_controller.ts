import GruPer from '#models/personal/gru_per'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class GruPersController {
  public async index({ response }: HttpContext) {
    const gruPers = await GruPer.all()
    return response.json(gruPers)
  }

  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    const gruPer = await GruPer.create(data)
    return response.json(gruPer)
  }

  public async show({ params, response }: HttpContext) {
    const gruPer = await GruPer.find(params.id)
    if (!gruPer) {
      return response.status(404).json({ error: 'GruPer not found' })
    }
    return response.json(gruPer)
  }

  public async update({ params, request, response }: HttpContext) {
    const gruPer = await GruPer.find(params.id)
    if (!gruPer) {
      return response.status(404).json({ error: 'GruPer not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    gruPer.merge(data)
    await gruPer.save()
    return response.json(gruPer)
  }

  public async delete({ params, response }: HttpContext) {
    const gruPer = await GruPer.find(params.id)
    if (!gruPer) {
      return response.status(404).json({ error: 'GruPer not found' })
    }
    await gruPer.delete()
    return response.status(200).json({ message: 'GruPer deleted' })
  }

  //Obtener modelo de gru_pers
  public async getGruPersModel({ response }: HttpContext) {
    try {
      const gruPersModelSchema = await db.rawQuery('DESCRIBE gru_pers');
      const filteredSchema = gruPersModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
          Extra: field.Extra,
        }));
      return response.json(filteredSchema);
    } catch (error) {
      return response.status(500).json({ error: 'Error al obtener el modelo de gru_pers' });
    }
  }
}