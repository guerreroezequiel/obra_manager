import { DateTime } from 'luxon'
import type { HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, manyToMany, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Etapa from '#models/etapa/etapa'
import Cliente from '#models/cliente/cliente'
import Estado from '#models/estado/estado'

export default class Obra extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string

  @column()
  declare habilitado: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Etapa)
  declare etapa: HasMany<typeof Etapa>

  @manyToMany(() => Cliente)
  declare cliente: ManyToMany<typeof Cliente>

  @hasOne(() => Estado) 
  declare estado: HasOne<typeof Estado>

}
