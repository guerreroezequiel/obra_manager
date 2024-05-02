import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AsoModEta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fkEtapas: number

  @column()
  declare fkModulos: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
