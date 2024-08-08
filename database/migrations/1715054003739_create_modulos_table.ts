import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'modulos'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('etapa_id').unsigned().references('id').inTable('etapas').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('etapa_id')
      table.dropColumn('etapa_id')
    })
  }
}