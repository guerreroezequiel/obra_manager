import Tipo from '#models/articulo/tipo'
import type { HttpContext } from '@adonisjs/core/http'

export default class TiposController {

    // mostrar todos
    public async index({ response }: HttpContext) {
        const tipos = await Tipo.all()
        return response.json(tipos)
    }

    // mostrar todos en un array
    public async indexArray({ response }: HttpContext) {
        const tipos = await Tipo.all()
        const tiposArray = tipos.map(tipo => tipo.toJSON())
        return response.json(tiposArray)
    }


    // crear
    public async create({ request, response }: HttpContext) {
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        const tipo = await Tipo.create(data)
        return response.json(tipo)
    }

    // mostrar uno
    public async show({ params, response }: HttpContext) {
        const tipo = await Tipo.find(params.id)
        if (!tipo) {
            return response.status(404).json({ error: 'Tipo not found' })
        }
        return response.json(tipo)
    }

    // actualizar
    public async update({ params, request, response }: HttpContext) {
        const tipo = await Tipo.find(params.id)
        if (!tipo) {
            return response.status(404).json({ error: 'Tipo not found' })
        }
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        tipo.merge(data)
        await tipo.save()
        return response.json(tipo)
    }

    // eliminar
    public async delete({ params, response }: HttpContext) {
        try {
            const tipo = await Tipo.find(params.id)
            if (!tipo) {
                return response.status(404).json({ error: 'Tipo not found' })
            }
            await tipo.delete()
            return response.status(200).json({ message: 'Tipo deleted' })
        } catch (error) {
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                return response.status(400).json({ error: 'Tipo is referenced' })
            }
            return response.status(500).json({ error: error.message })
        }
    }
}