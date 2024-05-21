import LisPre from '#models/proveedor/lis_pre'
import { HttpContext } from '@adonisjs/core/http'

export default class LisPresController {
  public async index({ response }: HttpContext) {
    const lisPres = await LisPre.query().preload('proveedor').preload('articulo')
    return response.json(lisPres)
  }

  public async create({ request, response }: HttpContext) {
    const proveedorId = request.input('proveedor_id')
    const articuloId = request.input('articulo_id')
    const lisPre = new LisPre()
    lisPre.proveedor = proveedorId
    lisPre.articulo = articuloId
    await lisPre.save()
    await lisPre.load('proveedor')
    await lisPre.load('articulo')
    return response.json(lisPre)
  }

  public async show({ params, response }: HttpContext) {
    const lisPre = await LisPre.query().where('id', params.id).preload('proveedor').preload('articulo').first()
    if (!lisPre) {
      return response.status(404).json({ error: 'LisPre not found' })
    }
    return response.json(lisPre)
  }

  public async update({ params, request, response }: HttpContext) {
    const lisPre = await LisPre.find(params.id)
    if (!lisPre) {
      return response.status(404).json({ error: 'LisPre not found' })
    }
    const proveedorId = request.input('proveedor_id')
    const articuloId = request.input('articulo_id')
    lisPre.proveedor = proveedorId
    lisPre.articulo = articuloId
    await lisPre.save()
    await lisPre.load('proveedor')
    await lisPre.load('articulo')
    return response.json(lisPre)
  }

  public async delete({ params, response }: HttpContext) {
    const lisPre = await LisPre.find(params.id)
    if (!lisPre) {
      return response.status(404).json({ error: 'LisPre not found' })
    }
    await lisPre.delete()
    return response.status(200).json({ message: 'LisPre deleted' })
  }
}