import Rubro from '#models/articulo/rubro'
import type { HttpContext } from '@adonisjs/core/http'

export default class RubrosController {

    // mostrar todos
    public async index({ response }: HttpContext) {
        const rubros = await Rubro.all()
        return response.json(rubros)
    }

    // mostrar todos en un array
    public async indexArray({ response }: HttpContext) {
        const rubros = await Rubro.all()
        const rubrosArray = rubros.map(rubro => rubro.toJSON())
        return response.json(rubrosArray)
    }

    // crear
    public async create({ request, response }: HttpContext) {
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        const rubro = await Rubro.create(data)
        return response.json(rubro)
    }

    // mostrar uno
    public async show({ params, response }: HttpContext) {
        const rubro = await Rubro.find(params.id)
        if (!rubro) {
            return response.status(404).json({ error: 'Rubro not found' })
        }
        return response.json(rubro)
    }

    // actualizar
    public async update({ params, request, response }: HttpContext) {
        const rubro = await Rubro.find(params.id)
        if (!rubro) {
            return response.status(404).json({ error: 'Rubro not found' })
        }
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        rubro.merge(data)
        await rubro.save()
        return response.json(rubro)
    }

    // eliminar
    public async delete({ params, response }: HttpContext) {
        try {
            const rubro = await Rubro.find(params.id)
            if (!rubro) {
                return response.status(404).json({ error: 'Rubro not found' })
            }
            await rubro.delete()
            return response.status(200).json({ message: 'Rubro deleted' })
        } catch (error) {
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                return response.status(400).json({ error: 'Rubro is referenced' })
            }
            return response.status(500).json({ error: error.message })
        }
    }

}