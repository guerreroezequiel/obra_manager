import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articulos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('fk_estados').notNullable()
      table.integer('fk_uni_med').notNullable()
      table.string('descripcion').notNullable()
      table.integer('fk_proveedores').notNullable()
      table.boolean('habilitado').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}