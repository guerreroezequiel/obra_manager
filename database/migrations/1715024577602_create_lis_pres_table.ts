import { BaseSchema } from '@adonisjs/lucid/schema'

export default class LisPres extends BaseSchema {
  protected tableName = 'lis_pres'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.decimal('precio').defaultTo(0)
      // table.integer('proveedor_id').unsigned().references('id').inTable('proveedors').nullable()
      // table.integer('articulo_id').unsigned().references('id').inTable('articulos').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}