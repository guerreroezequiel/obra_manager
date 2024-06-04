

//REVISAR DESPUES PARA HACER EL CRUD PORQUE ES UNA ASOCIACION ENTRE ARTICULO Y PROVEEDOR
import PerRol from '#models/personal/per_rol'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PerRolsController {
  public async index({ response }: HttpContext) {
    const perRols = await PerRol.all()
    return response.json(perRols)
  }

  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    const perRol = await PerRol.create(data)
    return response.json(perRol)
  }

  public async show({ params, response }: HttpContext) {
    const perRol = await PerRol.find(params.id)
    if (!perRol) {
      return response.status(404).json({ error: 'PerRol not found' })
    }
    return response.json(perRol)
  }

  public async update({ params, request, response }: HttpContext) {
    const perRol = await PerRol.find(params.id)
    if (!perRol) {
      return response.status(404).json({ error: 'PerRol not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'habilitado'])
    perRol.merge(data)
    await perRol.save()
    return response.json(perRol)
  }

  public async delete({ params, response }: HttpContext) {
    const perRol = await PerRol.find(params.id)
    if (!perRol) {
      return response.status(404).json({ error: 'PerRol not found' })
    }
    await perRol.delete()
    return response.status(200).json({ message: 'PerRol deleted' })
  }

  //Obtener modelo de per_rols
  public async getPerRolsModel({ response }: HttpContext) {
    try {
      const perRolsModelSchema = await db.rawQuery('DESCRIBE per_rols');
      const filteredSchema = perRolsModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
          Extra: field.Extra,
        }));
      return response.json(filteredSchema);
    } catch (error) {
      return response.status(500).json({ error: 'Error al obtener el modelo de per_rols' });
    }
  }
}