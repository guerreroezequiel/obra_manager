import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Modulos from '#models/modulo/modulo'
import Estado from '#models/estado/estado'
import Obra from '#models/obra/obra'

export default class Etapa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare area: number | null

  @column()
  declare habilitado: boolean | true
  
  @column()
  declare hereda_med: boolean | false

  @column()
  declare estado_id: number | null

  @column()
  declare obra_id: number | null



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Modulos)
  declare modulos: HasMany<typeof Modulos>

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  @belongsTo(() => Obra)
  declare obra: BelongsTo<typeof Obra>

}

