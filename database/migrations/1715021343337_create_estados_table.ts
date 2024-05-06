import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre')
      table.boolean('habilitado')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('tip_estado_id').unsigned().references('id').inTable('tip_estados')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}