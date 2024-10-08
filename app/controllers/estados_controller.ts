import Estado from '#models/estado/estado'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'


export default class EstadosController {

  // List all estados
  public async index({ response }: HttpContext) {
    const estados = await Estado.all()
    return response.json(estados)
  }

  // Create a new estado
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'habilitado'])
    const estado = await Estado.create(data)
    return response.json(estado)
  }

  // Show estado by id
  public async show({ params, response }: HttpContext) {
    const estado = await Estado.find(params.id)
    if (!estado) {
      return response.status(404).json({ error: 'Estado not found' })
    }
    return response.json(estado)
  }

  // Update estado data
  public async update({ params, request, response }: HttpContext) {
    const estado = await Estado.find(params.id)
    if (!estado) {
      return response.status(404).json({ error: 'Estado not found' })
    }
    const data = request.only(['nombre', 'habilitado'])
    estado.merge(data)
    await estado.save()
    return response.json(estado)
  }

  // Delete estado
  public async delete({ params, response }: HttpContext) {
    const estado = await Estado.find(params.id)
    if (!estado) {
      return response.status(404).json({ error: 'Estado not found' })
    }
    await estado.delete()
    return response.status(200).json({ message: 'Estado deleted' })
  }


  //Obtener modelo de estados
  public async getEstadosModel({ response }: HttpContext) {
    try {
      const estadosModelSchema = await db.rawQuery('DESCRIBE estados');
      const filteredSchema = estadosModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ estadosModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }
}