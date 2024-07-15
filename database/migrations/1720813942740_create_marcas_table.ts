import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Marcas extends BaseSchema {
  protected tableName = 'marcas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}