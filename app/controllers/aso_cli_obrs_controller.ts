import { HttpContext } from '@adonisjs/core/http';
import AsoCliObr from "#models/asociaciones/aso_cli_obr"
import db from '@adonisjs/lucid/services/db';


// 20/5 ESTE CRUD HAY QUE REVISARLO PORQUE ES LA TABLA INTERMEDIA ENTRE OBRA Y CLIENTE

export default class AsoCliObrsController {
  /**
   * Fetch all records
   */
  public async index({ response }: HttpContext) {
    const asoCliObrs = await AsoCliObr.query().preload('obra').preload('cliente')
    return response.json(asoCliObrs)
  }

  /**
   * Store a new record
   */
  public async store({ request, response }: HttpContext) {
    const obraId = request.input('obraId')
    const clienteId = request.input('clienteId')
    const asoCliObr = new AsoCliObr()
    asoCliObr.obra = obraId
    asoCliObr.cliente = clienteId
    await asoCliObr.save()
    return response.json(asoCliObr)
  }

  /**
   * Fetch a single record by id
   */
  public async show({ params, response }: HttpContext) {
    const asoCliObr = await AsoCliObr.query().where('id', params.id).preload('obra').preload('cliente').first()
    if (!asoCliObr) {
      return response.status(404).json({ error: 'Record not found' })
    }
    return response.json(asoCliObr)
  }

  /**
   * Update a record by id
   */
  public async update({ params, request, response }: HttpContext) {
    const asoCliObr = await AsoCliObr.find(params.id)
    if (!asoCliObr) {
      return response.status(404).json({ error: 'Record not found' })
    }
    const obraId = request.input('obraId')
    const clienteId = request.input('clienteId')
    asoCliObr.obra = obraId
    asoCliObr.cliente = clienteId
    await asoCliObr.save()
    return response.json(asoCliObr)
  }

  /**
   * Delete a record by id
   */
  public async destroy({ params, response }: HttpContext) {
    const asoCliObr = await AsoCliObr.find(params.id)
    if (!asoCliObr) {
      return response.status(404).json({ error: 'Record not found' })
    }
    await asoCliObr.delete()
    return response.status(200).json({ message: 'Record deleted' })
  }

  //Obtener modelo de asoCliObrs
  public async getAsoCliModel({ response }: HttpContext) {
    try {
      const asoCliObrsModelSchema = await db.rawQuery('DESCRIBE aso_cli_obrs');
      const filteredSchema = asoCliObrsModelSchema[0]
        .filter((field: any) => field.Field !== 'created_at' && field.Field !== 'updated_at')
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
        }));
      return response.json({ asoCliObrsModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }
}