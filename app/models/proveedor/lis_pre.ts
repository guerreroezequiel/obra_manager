import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, } from '@adonisjs/lucid/orm'
import type { BelongsTo, } from '@adonisjs/lucid/types/relations'
import Proveedor from './proveedor.js'
import Articulo from '#models/articulo/articulo'

export default class LisPre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string | null

  @column()
  declare precio: number | 0

  @column()
  declare proveedorId: number | null

  @column()
  declare articuloId: number | null

  @column()
  declare observacion: string | null

  @belongsTo(() => Proveedor)
  declare proveedor: BelongsTo<typeof Proveedor>

  @belongsTo(() => Articulo)
  declare articulo: BelongsTo<typeof Articulo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
