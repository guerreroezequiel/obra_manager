import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import ArtTarea from './det_tarea/art_tarea.js'
import PerTarea from './det_tarea/per_tarea.js'


export default class Tarea extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare fkEstados: number | null

  @column()
  declare descripcion: string | null

  @column()
  declare condicion: string | null

  @column()
  declare condBool: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => ArtTarea)
  declare art_tareas: HasMany<typeof ArtTarea>

  @hasMany(() => PerTarea)
  declare per_tareas: HasMany<typeof PerTarea>

}
