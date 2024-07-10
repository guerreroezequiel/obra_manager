import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user_field_settings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('table_name')
      table.string('field_name')
      table.string('tag')
      table.string('type').defaultTo('text')
      table.integer('width').defaultTo(200)
      table.integer('order')
      table.boolean('is_editable').defaultTo(true)
      table.boolean('is_hidden').defaultTo(false)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}