import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gru_pers'

  async up() {
    this.schema.createTable('gru_pers', (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.integer('fk_estados').notNullable()
      table.string('descripcion').notNullable()
      table.boolean('habilitado').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}