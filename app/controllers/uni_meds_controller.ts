// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import UniMed from '#models/uni_med/uni_med'

export default class UniMedsController {

  //mostrar todas uniMeds
  public async index({ response }: HttpContext) {
    const uniMeds = await UniMed.all()
    return response.json(uniMeds)
  }

  //mostrar ids uniMeds
  public async indexIds({ response }: HttpContext) {
    const uniMedIds = await UniMed.query().select('id')
    return response.json(uniMedIds.map(uniMed => uniMed.id))
  }

  //crear uniMed
  public async create({ request, response }: HttpContext) {
    const data = request.only(['id', 'nombre',])
    const uniMed = await UniMed.create(data)
    return response.json(uniMed)
  }

  //mostrar uniMed
  public async show({ params, response }: HttpContext) {
    const uniMed = await UniMed.find(params.id)
    if (!uniMed) {
      return response.status(404).json({ error: 'UniMed not found' })
    }
    return response.json(uniMed)
  }

  //actualizar uniMed
  public async update({ params, request, response }: HttpContext) {
    const uniMed = await UniMed.find(params.id)
    if (!uniMed) {
      return response.status(404).json({ error: 'UniMed not found' })
    }
    const data = request.only(['id', 'nombre',])
    uniMed.merge(data)
    await uniMed.save()
    return response.json(uniMed)
  }

  //borrar uniMed
  public async delete({ params, response }: HttpContext) {
    const uniMed = await UniMed.find(params.id)
    if (!uniMed) {
      return response.status(404).json({ error: 'UniMed not found' })
    }
    await uniMed.delete()
    return response.status(200).json({ message: 'UniMed deleted' })
  }


}