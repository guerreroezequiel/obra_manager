import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articulos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre')
      table.string('descripcion').nullable()
      table.string('tipo').nullable()
      table.boolean('habilitado')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('uni_med_id').unsigned().references('id').inTable('uni_meds')
      // table.integer('estado_id').unsigned().references('id').inTable('estados')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}