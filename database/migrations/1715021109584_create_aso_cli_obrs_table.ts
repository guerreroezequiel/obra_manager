import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'aso_cli_obrs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('obra_id').unsigned().references('id').inTable('obras')
      // table.integer('cliente_id').unsigned().references('id').inTable('clientes')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}