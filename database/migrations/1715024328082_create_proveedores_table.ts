import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Proveedors extends BaseSchema {
  protected tableName = 'proveedors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('mail', 255).nullable()
      table.string('tel', 255).nullable()
      table.string('direccion', 255).nullable()
      table.string('descripcion', 255).nullable()
      table.boolean('habilitado').defaultTo(true)
      // table.integer('estado_id').unsigned().references('id').inTable('estados').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}