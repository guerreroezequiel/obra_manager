import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'aso_cli_obrs'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('obra_id').unsigned().references('id').inTable('obras')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('obra_id')
      table.dropColumn('obra_id')

      table.dropForeign('cliente_id')
      table.dropColumn('cliente_id')
    })
  }
}