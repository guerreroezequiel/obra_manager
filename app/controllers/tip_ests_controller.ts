import TipEstado from '#models/estado/tip_est'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class TipEstadosController {

  // List all tipEstados
  public async index({ response }: HttpContext) {
    const tipEstados = await TipEstado.all()
    return response.json(tipEstados)
  }

  // Create a new tipEstado
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'habilitado'])
    const tipEstado = await TipEstado.create(data)
    return response.json(tipEstado)
  }

  // Show tipEstado by id
  public async show({ params, response }: HttpContext) {
    const tipEstado = await TipEstado.find(params.id)
    if (!tipEstado) {
      return response.status(404).json({ error: 'TipEstado not found' })
    }
    return response.json(tipEstado)
  }

  // Update tipEstado data
  public async update({ params, request, response }: HttpContext) {
    const tipEstado = await TipEstado.find(params.id)
    if (!tipEstado) {
      return response.status(404).json({ error: 'TipEstado not found' })
    }
    const data = request.only(['nombre', 'habilitado'])
    tipEstado.merge(data)
    await tipEstado.save()
    return response.json(tipEstado)
  }

  // Delete tipEstado
  public async delete({ params, response }: HttpContext) {
    const tipEstado = await TipEstado.find(params.id)
    if (!tipEstado) {
      return response.status(404).json({ error: 'TipEstado not found' })
    }
    await tipEstado.delete()
    return response.status(200).json({ message: 'TipEstado deleted' })
  }

  //Obtener modelo de tipEstados
  public async getTipEstadosModel({ response }: HttpContext) {
    try {
      const tipEstadosModelSchema = await db.rawQuery('DESCRIBE tip_estados');
      const filteredSchema = tipEstadosModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
          Extra: field.Extra,
        }))
      return response.json(filteredSchema)
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}