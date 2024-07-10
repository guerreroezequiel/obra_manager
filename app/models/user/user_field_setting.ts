import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UserFieldSetting extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare tableName: string

  @column()
  declare fieldName: string

  @column()
  declare tag: string

  @column()
  declare type: string

  @column()
  declare width: number

  @column()
  declare order: number

  @column()
  declare isEditable: boolean

  @column()
  declare isHidden: boolean

}
