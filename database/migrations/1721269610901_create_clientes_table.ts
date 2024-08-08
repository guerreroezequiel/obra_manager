import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('cat_iva_id').unsigned().references('id').inTable('cat_ivas').nullable()

    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('cat_iva_id')
      table.dropColumn('cat_iva_id')
    })
  }
}