import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UniMeds extends BaseSchema {
  protected tableName = 'uni_meds'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 10).primary().unique().notNullable()
      table.string('nombre', 100).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}