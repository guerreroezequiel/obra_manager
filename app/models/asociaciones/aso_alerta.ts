import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AsoAlerta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fkAlertas: number

  @column()
  declare fkTareas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
