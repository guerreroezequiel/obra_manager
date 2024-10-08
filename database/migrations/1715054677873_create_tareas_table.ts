import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tareas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('modulo_id').unsigned().references('id').inTable('modulos').nullable()
      table.string('uni_med_id').references('id').inTable('uni_meds').notNullable().defaultTo('mts')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('modulo_id')
      table.dropColumn('modulo_id')
      table.dropForeign('uni_med_id')
      table.dropColumn('uni_med_id')
    })
  }
}