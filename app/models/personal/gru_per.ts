import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Estado from '#models/estado/estado'
import type { HasOne, HasMany } from '@adonisjs/lucid/types/relations'
import Personal from './personal.js'

export default class GruPer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare habilitado: boolean | true

  @column() 
  declare estado_id: number | null



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  @hasMany(() => Personal)
  declare personal: HasMany <typeof Personal>

}
