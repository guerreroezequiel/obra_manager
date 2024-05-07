import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articulos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('uni_med_id').unsigned().references('id').inTable('uni_meds')
      table.integer('estado_id').unsigned().references('id').inTable('estados')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('uni_med_id')
      table.dropColumn('uni_med_id')

      table.dropForeign('estado_id')
      table.dropColumn('estado_id')
    })
  }
}