import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articulos'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('tipo_id').unsigned().references('id').inTable('tipos').nullable()
      table.integer('rubro_id').unsigned().references('id').inTable('rubros').nullable()
      table.integer('marca_id').unsigned().references('id').inTable('marcas').nullable()
      table.integer('presentacion_id').unsigned().references('id').inTable('presentacions').nullable()
      table.string('uni_med_pack').references('id').inTable('uni_meds').nullable()
      table.string('uni_med_id').references('id').inTable('uni_meds').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('uni_med_id')
      table.dropColumn('uni_med_id')

      table.dropForeign('estado_id')
      table.dropColumn('estado_id')
    })
  }
}