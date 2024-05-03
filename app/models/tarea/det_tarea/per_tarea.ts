import { DateTime } from 'luxon'

import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Tarea from '../tarea.js'

export default class PerTarea extends BaseModel {
  @column({ isPrimary: true })
  declare fkPersonal: number

  @column()
  declare fkTareas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Tarea )
  declare tareas: BelongsTo<typeof Tarea>

}
