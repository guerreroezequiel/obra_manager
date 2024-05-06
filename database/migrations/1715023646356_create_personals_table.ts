import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personals'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tel').nullable()
      table.string('direccion').nullable()
      table.string('descripcion').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      // table.integer('per_rol_id').unsigned().references('id').inTable('per_rols')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}