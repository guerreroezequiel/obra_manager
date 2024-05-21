import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Articulos extends BaseSchema {
  protected tableName = 'articulos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('descripcion', 255).nullable()
      table.string('tipo', 255).nullable()
      table.boolean('habilitado').defaultTo(true)
      // table.integer('uni_med_id').unsigned().references('id').inTable('uni_meds').nullable()
      // table.integer('estado_id').unsigned().references('id').inTable('estados').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}