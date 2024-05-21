import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Proveedor from './proveedor.js'
import Articulo from '#models/articulo/articulo'

export default class LisPre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare precio: number | 0

  @column()
  declare proveedor_id: number | null

  @column()
  declare articulo_id: number | null




  @belongsTo(() => Proveedor)
  declare proveedor: BelongsTo<typeof Proveedor>

  @hasOne(() => Articulo)
  declare articulo: HasOne<typeof Articulo>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
