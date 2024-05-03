import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo  } from '@adonisjs/lucid/orm'
import Tarea from '../tarea.js'

export default class ArtTarea extends BaseModel {
  @column({ isPrimary: true })
  declare fkArticulos: number

  @column()
  declare nombre: string

  @column()
  declare fkTareas: number

  @column()
  declare uniMed: number 

  @column()
  declare descripcion: string | null

  @column()
  declare cantidad: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Tarea )
  declare tareas: BelongsTo<typeof Tarea>
}
