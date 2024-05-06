import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lis_pres'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('proveedor_id').unsigned().references('id').inTable('proveedores')
      // table.integer('articulo_id').unsigned().references('id').inTable('articulos')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}