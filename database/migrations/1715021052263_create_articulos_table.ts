import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Articulos extends BaseSchema {
  protected tableName = 'articulos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 255).notNullable()
      table.string('descripcion', 255).nullable()
      // table.integer('tipo_id').unsigned().references('id').inTable('tipos').nullable()
      // table.integer('rubro_id').unsigned().references('id').inTable('rubros').nullable()
      // table.integer('marca_id').unsigned().references('id').inTable('marcas').nullable()
      // table.integer('presentacion_id').unsigned().references('id').inTable('presentacions').nullable()
      // table.string('uni_med_pack').unsigned().references('id').inTable('uni_meds').nullable()
      // table.integer('uni_med_id').unsigned().references('id').inTable('uni_meds').nullable()
      table.decimal('can_pack', 12, 2).nullable()
      table.decimal('rendimiento', 12, 2).nullable()
      table.boolean('habilitado').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}