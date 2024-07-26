
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class UniMed extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare nombre: string | null

}
