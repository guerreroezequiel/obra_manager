import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AsoCliObrs extends BaseSchema {
  protected tableName = 'aso_cli_obrs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.integer('obra_id').unsigned().references('id').inTable('obras').notNullable()
      // table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}