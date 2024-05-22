import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Etapas extends BaseSchema {
  protected tableName = 'etapas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('descripcion', 255).nullable()
      table.float('area').nullable()
      table.boolean('habilitado').defaultTo(true)
      table.boolean('hereda_med').defaultTo(false)
      // table.integer('estado_id').unsigned().references('id').inTable('estados').nullable()
      // table.integer('obra_id').unsigned().references('id').inTable('obras').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}