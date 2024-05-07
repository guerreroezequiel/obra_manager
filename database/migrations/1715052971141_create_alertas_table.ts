import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'alertas'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('estado_id').unsigned().references('id').inTable('estados')
      table.integer('tarea_id').unsigned().references('id').inTable('tareas')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('estado_id')
      table.dropColumn('tarea_id')
    })
  }
}