import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tareas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('modulo_id').unsigned().references('id').inTable('modulos')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('modulo_id')
      table.dropColumn('modulo_id')
    })
  }
}