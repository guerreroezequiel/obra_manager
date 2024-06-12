
import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import ArtTarea from './det_tarea/art_tarea.js'
import PerTarea from './det_tarea/per_tarea.js'
import Modulo from '#models/modulo/modulo'
import Alerta from '#models/alerta/alerta'
import Estado from '#models/estado/estado'
import UniMed from '#models/uni_med/uni_med'


export default class Tarea extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare condicion: string | null

  @column()
  declare condBool: boolean | false

  @column()
  declare heredaMed: boolean | false

  @column()
  declare moduloId: number | null

  @column()
  declare estadoId: number | null

  @column()
  declare medida: number | null

  @column()
  declare UniMedId: number | null




  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  @hasOne(() => UniMed)
  declare uni_med: HasOne<typeof UniMed>

  @hasMany(() => ArtTarea)
  declare art_tareas: HasMany<typeof ArtTarea>

  @hasMany(() => PerTarea)
  declare per_tareas: HasMany<typeof PerTarea>

  @hasMany(() => Alerta)
  declare alertas: HasMany<typeof Alerta>

  @belongsTo(() => Modulo)
  declare modulo: BelongsTo<typeof Modulo>

}
