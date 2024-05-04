import { DateTime } from 'luxon'
import type { HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import Etapa from '#models/etapa/etapa'
import Tarea from '#models/tarea/tarea'
import Estado from '#models/estado/estado'

export default class Modulo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare fkEstados: number

  @column()
  declare descripcion: string

  @column()
  declare habilitado: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Etapa, {
    pivotTable: 'aso_mod_eta',
    pivotColumns: ['area'],
  })
  declare etapas: ManyToMany<typeof Etapa>

  @hasMany(() => Tarea)
  declare tareas: HasMany<typeof Tarea>

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

}

