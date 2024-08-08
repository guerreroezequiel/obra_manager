import { DateTime } from 'luxon'
import type { HasMany, HasOne, } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Etapa from '#models/etapa/etapa'
import Cliente from '#models/cliente/cliente'

export default class Obra extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare codigo: string

  @column()
  declare direccion: string | null

  @column()
  declare clienteId: number | null

  @column()
  declare total: number | 0

  @column()
  declare subtotal: number | 0

  @column()
  declare descuento: number | 0

  @column()
  declare medida: number | null

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

  public get editableFields() {
    return {
      id: false,
      nombre: true,
      descripcion: true,
      medida: true,
    }
  }

}
