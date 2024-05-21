import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Alertas extends BaseSchema {
  protected tableName = 'alertas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('descripcion', 255).nullable()
      table.boolean('visto').defaultTo(false)
      // table.integer('estado_id').unsigned().references('id').inTable('estados').nullable()
      // table.integer('tarea_id').unsigned().references('id').inTable('tareas').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}