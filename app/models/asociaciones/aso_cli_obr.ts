import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Obra from '#models/obra/obra';
import Cliente from '#models/cliente/cliente';

export default class AsoCliObr extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @belongsTo(() => Obra)
  declare obra: BelongsTo<typeof Obra>

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}