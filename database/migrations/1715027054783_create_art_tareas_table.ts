import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ArtTareas extends BaseSchema {
  protected tableName = 'art_tareas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('articulo_nombre').nullable()
      table.string('articulo_uni_med').nullable()
      table.string('descripcion', 255).nullable()
      table.boolean('hereda_med').defaultTo(false)
      table.integer('cantidad').defaultTo(0)
      // table.integer('tarea_id').unsigned().references('id').inTable('tareas').notNullable()
      // table.integer('articulo_id').unsigned().references('id').inTable('articulos').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

