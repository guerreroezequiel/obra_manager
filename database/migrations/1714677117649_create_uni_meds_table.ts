import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'uni_meds'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('fkPersonal').primary()
      table.integer('fkTareas').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}