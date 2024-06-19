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
  declare precioTotal: number | 0

  @column()
  declare medida: number | null

  @column()
  declare habilitado: boolean | true

  @column()
  declare heredaMed: boolean | false

  @column()
  declare estadoId: number | null

  @column()
  declare obraId: number | null



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

  public get editableFields() {
    return {
      precioTotal: true,
      medida: true,
      habilitado: true,
      heredaMed: true,
      estadoId: true,
      obraId: false,
    }
  }

}



