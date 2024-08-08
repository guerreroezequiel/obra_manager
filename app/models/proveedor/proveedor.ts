import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, } from '@adonisjs/lucid/orm'
import type { HasMany, } from '@adonisjs/lucid/types/relations'
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


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime



  @hasMany(() => LisPre)
  declare lista: HasMany<typeof LisPre>

  public get editableFields() {
    return {
      direccion: true,
      descripcion: true,
      createdAt: false,
      updatedAt: false,
    }
  }
}
