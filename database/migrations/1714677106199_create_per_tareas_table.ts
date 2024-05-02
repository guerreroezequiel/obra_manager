import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'per_tareas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('fk_personal').primary()
      table.integer('fk_tareas').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}