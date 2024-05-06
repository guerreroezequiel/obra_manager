import { DateTime } from 'luxon'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Obra from '#models/obra/obra'
import Estado from '#models/estado/estado'


export default class Cliente extends BaseModel {
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
  declare habilitado: boolean

  @column()
  declare descripcion: string | null
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Obra)
  declare obra: HasMany<typeof Obra>

  @hasOne (() => Estado)
  declare estado: HasOne<typeof Estado>

}
