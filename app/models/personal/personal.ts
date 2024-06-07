import { DateTime } from 'luxon'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import PerTarea from '#models/tarea/det_tarea/per_tarea'
import PerRol from './per_rol.js'


export default class Personal extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare mail: string | null

  @column()
  declare tel: string | null

  @column()
  declare direccion: string | null

  @column()
  declare descripcion: string | null

  @column()
  declare habilitado: boolean | true

  @column()
  declare perRolId: number | null



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => PerTarea)
  declare perTareaId: HasMany<typeof PerTarea>

  @hasOne(() => PerRol)
  declare perRol: HasOne<typeof PerRol>

}
