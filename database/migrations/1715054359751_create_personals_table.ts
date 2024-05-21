import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'personals'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('per_rol_id').unsigned().references('id').inTable('per_rols').nullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('per_rol_id')
      table.dropColumn('per_rol_id')
    })
  }
}