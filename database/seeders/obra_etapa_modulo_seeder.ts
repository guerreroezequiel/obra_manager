import Etapa from '#models/etapa/etapa'
import Modulo from '#models/modulo/modulo'
import Obra from '#models/obra/obra'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Obra.createMany( [
      {
        nombre: 'Obra 1',
        descripcion: 'Descripcion de la Obra 1',
        habilitado: true,
        estado_id: 1,
      },
      {
        nombre: 'Obra 2',
        descripcion: 'Descripcion de la Obra 2',
        habilitado: true,
        estado_id: 2,
      },
    ]),

    await Etapa.createMany( [
      {
        nombre: 'Etapa 1',
        descripcion: 'Descripcion de la Etapa 1',
        habilitado: true,
        obra_id: 1,
      },
      {
        nombre: 'Etapa 2',
        descripcion: 'Descripcion de la Etapa 2',
        habilitado: true,
        obra_id: 2,
      },
    ]),

    await Modulo.createMany( [
      {
        nombre: 'Modulo 1',
        descripcion: 'Descripcion del Modulo 1',
        habilitado: true,
        etapa_id: 1,
      },
      {
        nombre: 'Modulo 2',
        descripcion: 'Descripcion del Modulo 2',
        habilitado: true,
        etapa_id: 2,
      },
    ])
  }
}