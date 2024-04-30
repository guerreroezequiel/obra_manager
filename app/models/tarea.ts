import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class Tarea extends BaseModel {
    @column({ isPrimary: true })
    declare ID: number
  
    @column()
    declare NOMBRE: string
  
    @column()
    declare FK_ESTADOS: number
  
    @column()
    declare DESCRIPCION: string
  
    @column()
    declare CONDICION: string | null
  
    @column()
    declare COND_BOOL: number | null

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare FEC_ACT: DateTime | null
  }