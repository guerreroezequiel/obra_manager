import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mail').nullable()
      table.string('tel').nullable()
      table.string('direccion').nullable()
      table.boolean('habilitado')
      table.string('descripcion').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('estado_id').unsigned().references('id').inTable('estados')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}