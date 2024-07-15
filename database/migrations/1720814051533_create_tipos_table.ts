import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tipos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}