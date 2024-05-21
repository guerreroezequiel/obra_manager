import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Estados extends BaseSchema {
  protected tableName = 'estados'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.boolean('habilitado').defaultTo(true)
      // table.integer('tip_est_id').unsigned().references('id').inTable('tip_ests').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}