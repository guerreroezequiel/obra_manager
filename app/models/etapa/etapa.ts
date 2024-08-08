import { DateTime } from 'luxon'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Modulos from '#models/modulo/modulo'
import Obra from '#models/obra/obra'

export default class Etapa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare total: number | 0

  @column()
  declare fianalizado: boolean | false

  @column()
  declare obraId: number | null


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Modulos)
  declare modulos: HasMany<typeof Modulos>

  @belongsTo(() => Obra)
  declare obra: BelongsTo<typeof Obra>

  public get editableFields() {
    return {
    }
  }

}



