import Articulo from '#models/articulo/articulo';
import { HttpContext } from '@adonisjs/core/http';
import db from '@adonisjs/lucid/services/db';

export default class ArticulosController {
  /**
   * Fetch all articles
   */
  public async index({ response }: HttpContext) {
    const articulos = await Articulo.all()
    return response.json(articulos)
  }

  /**
   * Store a new article
   */
  public async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'descripcion', 'tipo', 'habilitado'])
    const articulo = await Articulo.create(data)
    return response.json(articulo)
  }

  /**
   * Fetch a single article by id
   */
  public async show({ params, response }: HttpContext) {
    const articulo = await Articulo.find(params.id)
    if (!articulo) {
      return response.status(404).json({ error: 'Articulo not found' })
    }
    return response.json(articulo)
  }

  /**
   * Update an article by id
   */
  public async update({ params, request, response }: HttpContext) {
    const articulo = await Articulo.find(params.id)
    if (!articulo) {
      return response.status(404).json({ error: 'Articulo not found' })
    }
    const data = request.only(['nombre', 'descripcion', 'tipo', 'habilitado'])
    articulo.merge(data)
    await articulo.save()
    return response.json(articulo)
  }

  /**
   * Delete an article by id
   */
  public async delete({ params, response }: HttpContext) {
    const articulo = await Articulo.find(params.id)
    if (!articulo) {
      return response.status(404).json({ error: 'Articulo not found' })
    }
    await articulo.delete()
    return response.status(200).json({ message: 'Articulo deleted' })
  }

  //Obtener modelo de articulos
  public async getArticulosModel({ response }: HttpContext) {
    try {
      const articulosModelSchema = await db.rawQuery('DESCRIBE articulos');
      const filteredSchema = articulosModelSchema[0]
        .map((field: any) => ({
          Field: field.Field,
          Type: field.Type,
          Null: field.Null,
          Key: field.Key,
          Default: field.Default,
          editable: !(field.Field === 'id' || field.Field === 'created_at' || field.Field === 'updated_at'),
        }));
      return response.json({ articulosModelSchema: filteredSchema });
    } catch (error) {
      return response.status(500).json({ message: 'Algo salió mal' + error });
    }
  }

  //Obtener campos editables de articulos
  public async getEditableFields({ response }: HttpContext) {
    const articulo = new Articulo()
    return response.json(articulo.editableFields)
  }

}