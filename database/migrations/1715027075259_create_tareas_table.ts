import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Tareas extends BaseSchema {
  protected tableName = 'tareas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('descripcion', 255).nullable()
      table.string('condicion', 255).nullable()
      table.boolean('cond_bool').defaultTo(false)
      table.boolean('hereda_med').defaultTo(false)
      // table.integer('modulo_id').unsigned().references('id').inTable('modulos').nullable()
      // table.integer('estado_id').unsigned().references('id').inTable('estados').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}