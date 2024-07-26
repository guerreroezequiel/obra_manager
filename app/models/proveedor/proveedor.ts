import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Estado from '#models/estado/estado'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import LisPre from './lis_pre.js'


export default class Proveedor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare mail: string | null

  @column()
  declare tel: string | null

  @column()
  declare habilitado: boolean | true

  @column()
  declare direccion: string | null

  @column()
  declare descripcion: string | null

  @column()
  declare estadoId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  @hasMany(() => LisPre)
  declare lista: HasMany<typeof LisPre>

  public get editableFields() {
    return {
      direccion: true,
      descripcion: true,
      estadoId: true,
      createdAt: false,
      updatedAt: false,
    }
  }
}
