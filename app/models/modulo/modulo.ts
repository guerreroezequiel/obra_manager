import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany, } from '@adonisjs/lucid/orm'
import Etapa from '#models/etapa/etapa'
import Tarea from '#models/tarea/tarea'

export default class Modulo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare total: number | 0

  @column()
  declare etapaId: number | null

  @column()
  declare hablitado: boolean | true


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Etapa)
  declare etapa: BelongsTo<typeof Etapa> | null

  @hasMany(() => Tarea)
  declare tareas: HasMany<typeof Tarea>


}

