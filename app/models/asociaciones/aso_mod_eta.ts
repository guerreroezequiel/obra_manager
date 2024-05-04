import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Modulo from '#models/modulo/modulo';
import Etapa from '#models/etapa/etapa';

export default class AsoModEta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare area: string

  @belongsTo(() => Modulo)
  declare modulo: BelongsTo<typeof Modulo>

  @belongsTo(() => Etapa)
  declare etapa: BelongsTo<typeof Etapa>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
