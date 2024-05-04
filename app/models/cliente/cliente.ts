import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Obra from '#models/obra/obra'


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
  declare fkEstados: number | null
   
  @column()
  declare direccion: string | null
  
  @column()
  declare descripcion: string | null
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Obra)
  declare obra: HasMany<typeof Obra>

}
