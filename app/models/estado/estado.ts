import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, hasOne, column, } from '@adonisjs/lucid/orm'
import TipEstado from './tip_est.js'

export default class Estado extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare habilitado: boolean | true

  @column()
  declare tip_estado_id: number | false



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => TipEstado)
  declare tip_est: HasOne<typeof TipEstado>
}
