import Alerta from '#models/alerta/alerta';
import { HttpContext } from '@adonisjs/core/http';

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
}