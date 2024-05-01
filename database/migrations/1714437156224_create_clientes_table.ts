import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('apellido', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('telefono', 20).notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
      table.integer('fk_estados').nullable().references('id').inTable('estados')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
