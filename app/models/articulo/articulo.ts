import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import UniMed from '#models/uni_med/uni_med'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import LisPre from '#models/proveedor/lis_pre'
import Marca from './marca.js'
import Rubro from './rubro.js'
import Tipo from './tipo.js'
import Presentacion from './presentacion.js'

export default class Articulo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare tipoId: number | null

  @column()
  declare rubroId: number | null

  @column()
  declare marcaId: number | null

  @column()
  declare presentacionId: number | null

  @column()
  declare canPack: number | null

  @column()
  declare uniMedPack: string | null

  @column()
  declare rendimiento: number | null

  @column()
  declare uniMedId: string | null

  @column()
  declare habilitado: boolean | true




  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => UniMed)
  declare uniMed: HasOne<typeof UniMed>

  @hasOne(() => UniMed)
  declare uniMedP: HasOne<typeof UniMed>

  @hasOne(() => Rubro)
  declare rubro: HasOne<typeof Rubro>

  @hasOne(() => Presentacion)
  declare presentacion: HasOne<typeof Presentacion>

  @hasOne(() => Marca)
  declare marca: HasOne<typeof Marca>

  @hasOne(() => Tipo)
  declare tipo: HasOne<typeof Tipo>

  @hasMany(() => ArtTarea)
  declare perTareaId: HasMany<typeof ArtTarea>

  @hasMany(() => LisPre)
  declare lisPreId: HasMany<typeof LisPre>

  public get editableFields() {
    return {
      id: false,
      nombre: true,
      descripcion: true,
      tipo: true,
      habilitado: true,
      uniMedId: true,
      estadoId: true,
    }
  }

}
