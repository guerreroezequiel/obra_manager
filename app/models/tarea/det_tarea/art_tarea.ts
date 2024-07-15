import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Tarea from '../tarea.js'
import Articulo from '#models/articulo/articulo'

export default class ArtTarea extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare articuloId: number

  @column()
  declare articuloNombre: string | null

  @column()
  declare uniMedId: string | null

  @column()
  declare descripcion: string | null

  @column()
  declare heredaMed: boolean | false

  @column()
  declare cantidad: number | 0

  @column()
  declare cantidadTotal: number | 0

  @column()
  declare precioUnitario: number | 0

  @column()
  declare precioTotal: number | 0

  @column()
  declare tareaId: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Articulo)
  declare articulo: BelongsTo<typeof Articulo>


  @belongsTo(() => Tarea)
  declare tarea: BelongsTo<typeof Tarea>

  public get editableFields() {
    return {
      articuloId: false,
      articuloNombre: true,
      uniMedId: true,
      descripcion: true,
      heredaMed: true,
      cantidad: true,
      cantidadTotal: false,
      precioUnitario: true,
      precioTotal: true,
      tareaId: false,
    }
  }



}
