import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Obras extends BaseSchema {
  protected tableName = 'obras'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('codigo', 255).notNullable()
      table.string('direccion', 255).nullable()
      table.decimal('subtotal', 12, 2).nullable()
      table.decimal('total', 12, 2).nullable()
      table.decimal('descuento', 5, 2).defaultTo(1)
      table.decimal('medida', 12, 2).nullable()
      // table.integer('estado_id').unsigned().references('id').inTable('estados').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}