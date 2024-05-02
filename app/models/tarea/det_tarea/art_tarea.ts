import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ArtTarea extends BaseModel {
  @column({ isPrimary: true })
  declare fkArticulos: number

  @column()
  declare nombre: string

  @column()
  declare fkTareas: number

  @column()
  declare uniMed: number

  @column()
  declare descripcion: string

  @column()
  declare cantidad: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
