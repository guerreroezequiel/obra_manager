import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'etapas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('obra_id').unsigned().references('id').inTable('obras').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {

      table.dropForeign('obra_id')
      table.dropColumn('obra_id')
    })
  }
}