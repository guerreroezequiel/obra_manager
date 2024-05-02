import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AsoEtaObr extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fkObras: number

  @column()
  declare fkEtapas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
