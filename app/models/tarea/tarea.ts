
import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import ArtTarea from './det_tarea/art_tarea.js'
import Modulo from '#models/modulo/modulo'
import UniMed from '#models/uni_med/uni_med'


export default class Tarea extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare total: number | 0

  @column()
  declare subtotal: number | 0

  @column()
  declare descuento: number | 0

  @column()
  declare moduloId: number | null

  @column()
  declare cantidad: number | null

  @column()
  declare uniMedId: string | null


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @hasOne(() => UniMed)
  declare uni_med: HasOne<typeof UniMed>

  @hasMany(() => ArtTarea)
  declare art_tareas: HasMany<typeof ArtTarea>

  @belongsTo(() => Modulo)
  declare modulo: BelongsTo<typeof Modulo>

  public get editableFields() {
    return {
      uni_med: true,
      art_tareas: true,
      modulo: true,
    }
  }

}
