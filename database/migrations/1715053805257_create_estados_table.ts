import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estados'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('tip_est_id').unsigned().references('id').inTable('tip_estados').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('tip_est_id')
      table.dropColumn('tip_est_id')
    })
  }
}