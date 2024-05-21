import { HttpContext } from '@adonisjs/core/http'
import Personal from '#models/personal/personal'

export default class PersonalsController {

    // List all personals
  public async index({ response }: HttpContext) {
    const personals = await Personal.all()
    return response.json(personals)
  }

    // Create a new personal
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'mail', 'tel', 'direccion', 'descripcion'])
    const personal = await Personal.create(data)
    return response.json(personal)
  }

    // Show personal by id
  public async show({ params, response }: HttpContext) {
    const personal = await Personal.find(params.id)
    if (!personal) {
      return response.status(404).json({ error: 'Personal not found' })
    }
    return response.json(personal)
  }

    // Update personal data
  public async update({ params, request, response }: HttpContext) {
    const personal = await Personal.find(params.id)
    if (!personal) {
      return response.status(404).json({ error: 'Personal not found' })
    }
    const data = request.only(['nombre', 'mail', 'tel', 'direccion', 'descripcion'])
    personal.merge(data)
    await personal.save()
    return response.json(personal)
  }

    // Delete personal
  public async delete({ params, response }: HttpContext) {
    const personal = await Personal.find(params.id)
    if (!personal) {
      return response.status(404).json({ error: 'Personal not found' })
    }
    await personal.delete()
    return response.status(200).json({ message: 'Personal deleted' })
  }
}