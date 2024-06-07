import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import UniMed from '#models/uni_med/uni_med'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Estado from '#models/estado/estado'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'

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
  declare habilitado: boolean | true

  @column()
  declare uniMedId: number | null

  @column()
  declare estadoId: number | null



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => UniMed)
  declare uni_med: HasOne<typeof UniMed>

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  @hasMany(() => ArtTarea)
  declare perTareaId: HasMany<typeof ArtTarea>

}
