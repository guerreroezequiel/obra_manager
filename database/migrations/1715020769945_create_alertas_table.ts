import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'alertas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre')
      table.string('descripcion').nullable()
      table.boolean('visto').defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('estado_id').unsigned().references('id').inTable('estados')
      // table.integer('tarea_id').unsigned().references('id').inTable('tareas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}