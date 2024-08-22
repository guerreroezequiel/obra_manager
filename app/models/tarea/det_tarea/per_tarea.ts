import { DateTime } from 'luxon'

import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
// import Tarea from '../tarea.js'
import Personal from '#models/personal/personal'

export default class PerTarea extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare personalId: number

  // @column()
  // declare tareaId: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Personal)
  declare personal: BelongsTo<typeof Personal>

  // @belongsTo(() => Tarea)
  // declare tarea: BelongsTo<typeof Tarea>


}
