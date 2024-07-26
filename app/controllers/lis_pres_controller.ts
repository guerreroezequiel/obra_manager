import LisPre from '#models/proveedor/lis_pre'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class LisPresController {
  public async index({ response }: HttpContext) {
    const lisPres = await LisPre.query().preload('articulo', (query) => {
      query.select('nombre', 'descripcion', 'uniMedId', 'id')
    })

    // Convert each LisPre object to a plain JavaScript object and flatten the articulo object
    const lisPresObjects = lisPres.map((lisPre) => {
      const lisPreObject = lisPre.toJSON()

      if (lisPreObject.articulo) {
        lisPreObject.articuloNombre = lisPreObject.articulo.nombre
        lisPreObject.articuloDescripcion = lisPreObject.articulo.descripcion
        lisPreObject.articuloUniMed = lisPreObject.articulo.uniMedId
        lisPreObject.articuloId = lisPreObject.articulo.id
        delete lisPreObject.articulo
      }

      return lisPreObject
    })

    return response.json(lisPresObjects)
  }

  public async create({ request, response }: HttpContext) {
    const proveedorId = request.input('proveedor_id')
    const articuloId = request.input('articulo_id')
    const listaId = request.input('lis_pre_id') // Agregando lis_pre_id
    const lisPre = new LisPre()
    lisPre.proveedor = proveedorId
    lisPre.articulo = articuloId
    lisPre.lista = listaId
    await lisPre.save()
    await lisPre.load('articulo')
    await lisPre.load('lista')
    return response.json(lisPre)
  }

  public async show({ params, response }: HttpContext) {
    const lisPre = await LisPre.query().where('id', params.id).preload('articulo').first()
    if (!lisPre) {
      return response.status(404).json({ error: 'LisPre not found' })
    }
    return response.json(lisPre)
  }

  public async update({ params, request, response }: HttpContext) {
    const lisPre = await LisPre.find(params.id)
    if (!lisPre) {
      return response.status(404).json({ error: 'Articulo not found' })
    }
    const data = request.only(['proveedorId', 'articuloId', 'listaId', 'precioVenta', 'markUp', 'precioCompra', 'descripcion'])
    lisPre.merge(data)
    await lisPre.save()
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

  //Obtener modelo de lisPres
  public async getLisPresModel({ response }: HttpContext) {
    try {
      const lisPresModelSchema = await db.rawQuery('DESCRIBE lis_pres');
      const filteredSchema = lisPresModelSchema[0]
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