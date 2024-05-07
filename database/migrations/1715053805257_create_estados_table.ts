import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estados'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('tip_estado_id').unsigned().references('id').inTable('tip_ests')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('tip_estado_id')
      table.dropColumn('tip_estado_id')
    })
  }
}