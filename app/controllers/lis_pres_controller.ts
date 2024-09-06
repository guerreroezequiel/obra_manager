import LisPre from '#models/proveedor/lis_pre'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class LisPresController {
  public async index({ response }: HttpContext) {
    const lisPres = await LisPre.query()
      .preload('articulo', (articuloQuery) => {
        articuloQuery.select('nombre', 'descripcion', 'uniMedId', 'uniMedPack', 'rendimiento', 'canPack', 'rubroId', 'marcaId', 'tipoId', 'presentacionId')
          .preload('rubro', (rubroQuery) => {
            rubroQuery.select('nombre')
          })
          .preload('marca', (marcaQuery) => {
            marcaQuery.select('nombre')
          })
          .preload('presentacion', (presentacionQuery) => {
            presentacionQuery.select('nombre')
          })
          .preload('tipo', (tipoQuery) => {
            tipoQuery.select('nombre')
          })
      })
      .preload('proveedor', (proveedorQuery) => {
        proveedorQuery.select('nombre')
      })

    const lisPresObjects = lisPres.map((lisPre) => {
      const lisPreObject = lisPre.toJSON()

      if (lisPreObject.articulo) {
        lisPreObject.articuloNombre = lisPreObject.articulo.nombre
        lisPreObject.articuloDescripcion = lisPreObject.articulo.descripcion
        lisPreObject.articuloUniMedId = lisPreObject.articulo.uniMedId
        lisPreObject.articuloUniMedPack = lisPreObject.articulo.uniMedPack
        lisPreObject.articuloRendimiento = lisPreObject.articulo.rendimiento
        lisPreObject.articuloCanPack = lisPreObject.articulo.canPack


        if (lisPreObject.articulo.rubro) {
          lisPreObject.articuloRubroId = lisPreObject.articulo.rubro.nombre
        }
        if (lisPreObject.articulo.marca) {
          lisPreObject.articuloMarcaId = lisPreObject.articulo.marca.nombre
        }
        if (lisPreObject.articulo.presentacion) {
          lisPreObject.articuloPresentacionId = lisPreObject.articulo.presentacion.nombre
        }
        if (lisPreObject.articulo.tipo) {
          lisPreObject.articuloTipoId = lisPreObject.articulo.tipo.nombre
        }

        delete lisPreObject.articulo
      }

      if (lisPreObject.proveedor) {
        lisPreObject.proveedorNombre = lisPreObject.proveedor.nombre
        delete lisPreObject.proveedor
      }

      return lisPreObject
    })

    return response.json(lisPresObjects)
  }

  public async indexBus({ response }: HttpContext) {
    const lisPres = await LisPre.query()
      .preload('proveedor', (proveedorQuery) => {
        proveedorQuery.select('nombre')
      })
      .preload('lista', (listaQuery) => {
        listaQuery.select('nombre')
      })
      .preload('articulo', (articuloQuery) => {
        articuloQuery.select('nombre', 'descripcion', 'uniMedId', 'uniMedPack', 'rendimiento', 'canPack', 'rubroId', 'marcaId', 'tipoId', 'presentacionId')
          .preload('rubro', (rubroQuery) => {
            rubroQuery.select('nombre')
          })
          .preload('marca', (marcaQuery) => {
            marcaQuery.select('nombre')
          })
          .preload('presentacion', (presentacionQuery) => {
            presentacionQuery.select('nombre')
          })
          .preload('tipo', (tipoQuery) => {
            tipoQuery.select('nombre')
          })
      })

    const lisPresObjects = lisPres.map((lisPre) => {
      const lisPreObject = lisPre.toJSON()

      if (lisPreObject.articulo) {
        lisPreObject.articuloNombre = lisPreObject.articulo.nombre
        lisPreObject.articuloDescripcion = lisPreObject.articulo.descripcion
        lisPreObject.articuloUniMedId = lisPreObject.articulo.uniMedId
        lisPreObject.articuloUniMedPack = lisPreObject.articulo.uniMedPack
        lisPreObject.articuloRendimiento = lisPreObject.articulo.rendimiento
        lisPreObject.articuloCanPack = lisPreObject.articulo.canPack
        if (lisPreObject.proveedor) {
          lisPreObject.proveedorId = lisPreObject.proveedor.nombre
          delete lisPreObject.proveedor
        }
        if (lisPreObject.lista) {
          lisPreObject.listaId = lisPreObject.lista.nombre
          delete lisPreObject.lista
        }

        if (lisPreObject.articulo.rubro) {
          lisPreObject.articuloRubroId = lisPreObject.articulo.rubro.nombre
        }

        if (lisPreObject.articulo.rubro) {
          lisPreObject.articuloRubroId = lisPreObject.articulo.rubro.nombre
        }
        if (lisPreObject.articulo.marca) {
          lisPreObject.articuloMarcaId = lisPreObject.articulo.marca.nombre
        }
        if (lisPreObject.articulo.presentacion) {
          lisPreObject.articuloPresentacionId = lisPreObject.articulo.presentacion.nombre
        }
        if (lisPreObject.articulo.tipo) {
          lisPreObject.articuloTipoId = lisPreObject.articulo.tipo.nombre
        }

        delete lisPreObject.articulo
      }

      return lisPreObject
    })

    return response.json(lisPresObjects)
  }

  public async create({ request, response }: HttpContext) {
    const data = request.only(['articuloId', 'listaId', 'precioVenta', 'descripcion', 'proveedorId'])
    const lisPre = await LisPre.create(data)
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
    const data = request.only(['proveedorId', 'articuloId', 'listaId', 'precioVenta', 'descripcion'])
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