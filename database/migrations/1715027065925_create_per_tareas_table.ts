import { BaseSchema } from '@adonisjs/lucid/schema'

export default class PerTareas extends BaseSchema {
  protected tableName = 'per_tareas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.integer('personal_id').unsigned().references('id').inTable('personals').notNullable()
      // table.integer('tarea_id').unsigned().references('id').inTable('tareas').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}