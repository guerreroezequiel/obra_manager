import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Modulos from '#models/modulo/modulo'

export default class Etapa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare fkEstados: number

  @column()
  declare descripcion: string

  @column()
  declare fkAsoModEta: number

  @column()
  declare area: number | null

  @column()
  declare habilitado: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Modulos)
  declare modulos: HasMany<typeof Modulos>

}

