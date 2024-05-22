import { DateTime } from 'luxon'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasOne  } from '@adonisjs/lucid/orm'
import Tarea from '../tarea.js'
import Articulo from '#models/articulo/articulo'

export default class ArtTarea extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare hereda_med: boolean | false

  @column()
  declare cantidad: number | 0

  @column()
  declare tarea_id: number

  @column()
  declare articulo_id: number



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Articulo)
  declare articulo: HasOne<typeof Articulo>

  @belongsTo(() => Tarea )
  declare tarea: BelongsTo<typeof Tarea>


}
