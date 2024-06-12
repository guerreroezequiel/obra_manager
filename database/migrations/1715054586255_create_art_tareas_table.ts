import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'art_tareas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('tarea_id').unsigned().references('id').inTable('tareas').notNullable()
      table.integer('articulo_id').unsigned().references('id').inTable('articulos').notNullable()
      table.integer('uni_med_id').unsigned().references('id').inTable('uni_meds').notNullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('tarea_id')
      table.dropColumn('tarea_id')
      table.dropForeign('articulo_id')
      table.dropColumn('articulo_id')
      table.dropForeign('uni_med_id')
      table.dropColumn('uni_med_id')
    })
  }
}