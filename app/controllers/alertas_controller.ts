import Alerta from '#models/alerta/alerta';
import { HttpContext } from '@adonisjs/core/http';
import db from '@adonisjs/lucid/services/db';

export default class AlertasController {

  // List all alertas  
  public async index({ response }: HttpContext) {
    const alertas = await Alerta.all()
    return response.json(alertas)
  }

  // Create a new alerta
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'visto'])
    const alerta = await Alerta.create(data)
    return response.json(alerta)
  }

  // Show alerta by id
  public async show({ params, response }: HttpContext) {
    const alerta = await Alerta.find(params.id)
    if (!alerta) {
      return response.status(404).json({ error: 'Alerta not found' })
    }
    return response.json(alerta)
  }

  // Update alerta data
  public async update({ params, request, response }: HttpContext) {
    const alerta = await Alerta.find(params.id)
    if (!alerta) {
      return response.status(404).json({ error: 'Alerta not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'visto'])
    alerta.merge(data)
    await alerta.save()
    return response.json(alerta)
  }

  // Delete alerta
  public async delete({ params, response }: HttpContext) {
    const alerta = await Alerta.find(params.id)
    if (!alerta) {
      return response.status(404).json({ error: 'Alerta not found' })
    }
    await alerta.delete()
    return response.status(200).json({ message: 'Alerta deleted' })
  }

  //Obtener modelo de alertas
  public async getAlertasModel({ response }: HttpContext) {
    try {
      const alertasModelSchema = await db.rawQuery('DESCRIBE alertas');
      const filteredSchema = alertasModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ alertasModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }
}