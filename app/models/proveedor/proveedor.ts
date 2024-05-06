import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Estado from '#models/estado/estado'
import type { HasOne } from '@adonisjs/lucid/types/relations'


export default class Proveedor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare nombre: string 
  
  @column()
  declare mail: string | null
  
  @column()
  declare tel: string | null
  
  @column()
  declare habilitado: boolean
   
  @column()
  declare direccion: string | null
  
  @column()
  declare descripcion: string | null
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @hasOne (() => Estado)
  declare estado: HasOne<typeof Estado>
}
