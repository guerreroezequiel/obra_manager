import Marca from '#models/articulo/marca'
import type { HttpContext } from '@adonisjs/core/http'

export default class MarcasController {
    // mostrar todos
    public async index({ response }: HttpContext) {
        const marcas = await Marca.all()
        return response.json(marcas)
    }

    // mostrar todos en un array
    public async indexArray({ response }: HttpContext) {
        const marcas = await Marca.all()
        const marcasArray = marcas.map(marca => marca.toJSON())
        return response.json(marcasArray)
    }


    // crear
    public async create({ request, response }: HttpContext) {
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        const marca = await Marca.create(data)
        return response.json(marca)
    }

    // mostrar uno
    public async show({ params, response }: HttpContext) {
        const marca = await Marca.find(params.id)
        if (!marca) {
            return response.status(404).json({ error: 'Marca not found' })
        }
        return response.json(marca)
    }

    // actualizar
    public async update({ params, request, response }: HttpContext) {
        const marca = await Marca.find(params.id)
        if (!marca) {
            return response.status(404).json({ error: 'Marca not found' })
        }
        const data = request.only(['nombre', 'descripcion', 'habilitado'])
        marca.merge(data)
        await marca.save()
        return response.json(marca)
    }

    // eliminar
    public async delete({ params, response }: HttpContext) {
        try {
            const marca = await Marca.find(params.id)
            if (!marca) {
                return response.status(404).json({ error: 'Marca not found' })
            }
            await marca.delete()
            return response.status(200).json({ message: 'Marca deleted' })
        } catch (error) {
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                return response.status(400).json({ error: 'Marca is referenced' })
            }
            return response.status(500).json({ error: error.message })
        }
    }
}