import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Estado from '#models/estado/estado'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Tarea from '#models/tarea/tarea'

export default class Alerta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string   | null

  @column()
  declare visto: boolean | 0

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  @belongsTo(() => Tarea)
  declare tarea: BelongsTo<typeof Tarea>

}
