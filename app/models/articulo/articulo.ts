import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import UniMed from '#models/uni_med/uni_med'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Estado from '#models/estado/estado'

export default class Articulo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare tipo: string | null

  @column()
  declare habilitado: boolean | 1

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => UniMed)
  declare uni_med: HasOne<typeof UniMed>

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

}
