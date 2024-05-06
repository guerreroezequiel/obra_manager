import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'art_tareas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('heredaMed')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('tarea_id').unsigned().references('id').inTable('tareas')
      // table.integer('articulo_id').unsigned().references('id').inTable('articulos')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}