import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'art_tareas'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('tarea_id').unsigned().references('id').inTable('tareas').notNullable()
      table.integer('articulo_id').unsigned().references('id').inTable('articulos').notNullable()
      table.string('uni_med_id').references('id').inTable('uni_meds').notNullable()
      table.string('rubro_id').nullable()
      table.string('tipo_id').nullable()
      table.string('marca_id').nullable()
      table.string('presentacion_id').nullable()
      table.string('uni_med_pack').nullable()
      table.decimal('can_pack', 12, 2).nullable()
      table.decimal('rendimiento', 12, 2).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}