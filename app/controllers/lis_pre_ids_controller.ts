import { HttpContext } from '@adonisjs/core/http';
import LisPreIds from '#models/proveedor/lis_pre_ids';

export default class LisPreIdsController {

    //Obtener todas las lisPreIdes
    public async index({ response }: HttpContext) {
        const lisPreIds = await LisPreIds.all()
        return response.json(lisPreIds)
    }

    //Obtener todas las lisPreIdes en un array
    public async indexArray({ response }: HttpContext) {
        const lisPreIds = await LisPreIds.all()
        const lisPreIdsArray = lisPreIds.map(lisPreId => lisPreId.toJSON())
        return response.json(lisPreIdsArray)
    }

    //Crear una nueva lisPreId
    public async create({ request, response }: HttpContext) {
        const data = request.only(['nombre'])
        const lisPreId = await LisPreIds.create(data)
        return response.json(lisPreId)
    }

    //Obtener una lisPreId por id
    public async show({ params, response }: HttpContext) {
        const lisPreId = await LisPreIds.find(params.id)
        if (!lisPreId) {
            return response.status(404).json({ error: 'lisPreId not found' })
        }
        return response.json(lisPreId)
    }

    //Actualizar una lisPreId por id
    public async update({ params, request, response }: HttpContext) {
        const lisPreId = await LisPreIds.find(params.id)
        if (!lisPreId) {
            return response.status(404).json({ error: 'lisPreId not found' })
        }
        const data = request.only(['nombre'])
        lisPreId.merge(data)
        await lisPreId.save()
        return response.json(lisPreId)
    }

    //Eliminar una lisPreId por id
    public async delete({ params, response }: HttpContext) {
        const lisPreId = await LisPreIds.find(params.id)
        if (!lisPreId) {
            return response.status(404).json({ error: 'lisPreId not found' })
        }
        await lisPreId.delete()
        return response.status(200).json({ message: 'lisPreId deleted' })
    }

}