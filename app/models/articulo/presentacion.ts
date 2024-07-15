
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Presentacion extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare nombre: string


}
