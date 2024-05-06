import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'per_tareas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('personal_id').unsigned().references('id').inTable('personals')
      // table.integer('tarea_id').unsigned().references('id').inTable('tareas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}