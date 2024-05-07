import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'etapas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('estado_id').unsigned().references('id').inTable('estados')
      table.integer('obra_id').unsigned().references('id').inTable('obras')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('estado_id')
      table.dropColumn('estado_id')

      table.dropForeign('obra_id')
      table.dropColumn('obra_id')
    })
  }
}