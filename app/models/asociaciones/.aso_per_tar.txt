import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AsoPerTar extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fkPersonal: number

  @column()
  declare fkTarea: number 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
