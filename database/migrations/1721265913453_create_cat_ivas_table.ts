import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cat_ivas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.decimal('porcentaje', 6, 2).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}