import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, } from '@adonisjs/lucid/orm'
import type { BelongsTo, } from '@adonisjs/lucid/types/relations'
import Proveedor from './proveedor.js'
import Articulo from '#models/articulo/articulo'
import LisPreIds from './lis_pre_ids.js'

export default class LisPre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare listaId: number | null

  @column()
  declare precioVenta: number | 0

  @column()
  declare markUp: number | 1

  @column()
  declare precioCompra: number | 0

  @column()
  declare proveedorId: number | null

  @column()
  declare articuloId: number | null

  @column()
  declare descripcion: string | null

  @belongsTo(() => Proveedor)
  declare proveedor: BelongsTo<typeof Proveedor>

  @belongsTo(() => Articulo)
  declare articulo: BelongsTo<typeof Articulo>

  @belongsTo(() => LisPreIds, {
    foreignKey: 'listaId',
  })
  declare lista: BelongsTo<typeof LisPreIds>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}
