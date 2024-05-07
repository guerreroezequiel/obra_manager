import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gru_pers'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('estado_id').unsigned().references('id').inTable('estados')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('estado_id')
      table.dropColumn('estado_id')
    })
  }
}