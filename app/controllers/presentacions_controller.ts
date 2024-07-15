import { HttpContext } from '@adonisjs/core/http';
import Presentacion from "#models/articulo/presentacion"

export default class PresentacionsController {

    //Obtener todas las presentaciones
    public async index({ response }: HttpContext) {
        const presentacions = await Presentacion.all()
        return response.json(presentacions)
    }

    //Obtener todas las presentaciones en un array
    public async indexArray({ response }: HttpContext) {
        const presentacions = await Presentacion.all()
        const presentacionsArray = presentacions.map(presentacion => presentacion.toJSON())
        return response.json(presentacionsArray)
    }

    //Crear una nueva presentacion
    public async create({ request, response }: HttpContext) {
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        const presentacion = await Presentacion.create(data)
        return response.json(presentacion)
    }

    //Obtener una presentacion por id
    public async show({ params, response }: HttpContext) {
        const presentacion = await Presentacion.find(params.id)
        if (!presentacion) {
            return response.status(404).json({ error: 'Presentacion not found' })
        }
        return response.json(presentacion)
    }

    //Actualizar una presentacion por id
    public async update({ params, request, response }: HttpContext) {
        const presentacion = await Presentacion.find(params.id)
        if (!presentacion) {
            return response.status(404).json({ error: 'Presentacion not found' })
        }
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        presentacion.merge(data)
        await presentacion.save()
        return response.json(presentacion)
    }

    //Eliminar una presentacion por id
    public async delete({ params, response }: HttpContext) {
        const presentacion = await Presentacion.find(params.id)
        if (!presentacion) {
            return response.status(404).json({ error: 'Presentacion not found' })
        }
        await presentacion.delete()
        return response.status(200).json({ message: 'Presentacion deleted' })
    }

}