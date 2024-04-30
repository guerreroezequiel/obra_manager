import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'


class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare nombre: string 
  
  @column()
  declare mail: string | null
  
  @column()
  declare fkEstados: number | null
  
  @column.dateTime()
  declare fecAct: DateTime | null
  
  @column()
  declare direccion: string | null
  
  @column()
  declare descripcion: string | null
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

export default Cliente;
