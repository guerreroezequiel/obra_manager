import { DateTime } from 'luxon'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Obra from '#models/obra/obra'
import CatIva from './cat_iva.js'


export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare mail: string | null

  @column()
  declare tel: string | null

  @column()
  declare direccion: string | null

  @column()
  declare descripcion: string | null

  @column()
  declare habilitado: boolean | true

  @column()
  declare catIvaId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Obra)
  declare obra: HasMany<typeof Obra>

  @hasOne(() => CatIva)
  declare catIva: HasOne<typeof CatIva>



  public get editableFields() {
    return {
      nombre: true,
      tel: true,
      direccion: true,
      descripcion: true,
      habilitado: true,
      createdAt: false,
      updatedAt: false,
    }
  }
}
