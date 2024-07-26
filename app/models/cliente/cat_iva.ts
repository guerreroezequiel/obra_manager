import { BaseModel, column } from "@adonisjs/lucid/orm"
import { DateTime } from "luxon"


export default class CatIva extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare nombre: string

    @column()
    declare porcentaje: number | null

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}