import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lis_pres'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('lista_id').unsigned().references('id').inTable('lis_pre_ids')
      table.integer('proveedor_id').unsigned().references('id').inTable('proveedors').nullable()
      table.integer('articulo_id').unsigned().references('id').inTable('articulos')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('proveedor_id')
      table.dropColumn('proveedor_id')
      table.dropForeign('lis_pre_id')

      table.dropForeign('articulo_id')
      table.dropColumn('articulo_id')
      table.dropForeign('lis_pre_id')
    })
  }
}