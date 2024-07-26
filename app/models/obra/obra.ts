import { DateTime } from 'luxon'
import type { HasMany, HasOne, } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Etapa from '#models/etapa/etapa'
import Cliente from '#models/cliente/cliente'
import Estado from '#models/estado/estado'

export default class Obra extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare total: number | 0

  @column()
  declare subtotal: number | 0

  @column()
  declare descuento: number | 0

  @column()
  declare iva: number | 1

  @column()
  declare medida: number | null

  @column()
  declare habilitado: boolean | true

  @column()
  declare estadoId: number | null



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Etapa)
  declare etapas: HasMany<typeof Etapa>

  @hasOne(() => Cliente)
  declare clientes: HasOne<typeof Cliente>

  @hasOne(() => Estado)
  declare estado: HasOne<typeof Estado>

  public get editableFields() {
    return {
      id: false,
      nombre: true,
      descripcion: true,
      medida: true,
      habilitado: true,
      estadoId: true,
    }
  }

}
