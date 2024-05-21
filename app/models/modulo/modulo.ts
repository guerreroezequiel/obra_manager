import { DateTime } from 'luxon'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Etapa from '#models/etapa/etapa'
import Tarea from '#models/tarea/tarea'
import Estado from '#models/estado/estado'

export default class Modulo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare habilitado: boolean | true

  @column()
  declare heredaMed: boolean | false

  @column()
  declare etapas_id: number | null

  @column()
  declare estado_id: number | null



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Etapa)
  declare etapas: BelongsTo<typeof Etapa> | null

  @hasMany(() => Tarea)
  declare tareas: HasMany<typeof Tarea>

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

}

