import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'per_tareas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('personal_id').unsigned().references('id').inTable('personals').notNullable()
      table.integer('tarea_id').unsigned().references('id').inTable('tareas').notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('personal_id')
      table.dropColumn('personal_id')

      table.dropForeign('tarea_id')
      table.dropColumn('tarea_id')
    })
  }
}