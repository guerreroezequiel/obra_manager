import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'etapas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre')
      table.string('descripcion').nullable()
      table.float('area').nullable()
      table.boolean('habilitado')
      table.boolean('heredaMed')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('estado_id').unsigned().references('id').inTable('estados')
      // table.integer('obra_id').unsigned().references('id').inTable('obras')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}