import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'art_tareas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('fk_articulos').primary()
      table.string('nombre').notNullable()
      table.integer('fk_tareas').notNullable()
      table.integer('uni_med').notNullable()
      table.string('descripcion').nullable()
      table.integer('cantidad').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}