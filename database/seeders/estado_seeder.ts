import Estado from '#models/estado/estado'
import TipEstado from '#models/estado/tip_est'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await TipEstado.createMany( [
      {
        nombre: 'Tipo Estado 1',
        habilitado: true,
      },
      {
        nombre: 'Tipo Estado 2',
        habilitado: true,
      },
      {
        nombre: 'Tipo Estado 3',
        habilitado: true,
      },
    ]),

    await Estado.createMany( [
      {
        nombre: 'Estado 1',
        habilitado: true,
      },
      {
        nombre: 'Estado 2',
        habilitado: true,
      },
      {
        nombre: 'Estado 3',
        habilitado: true,
      },
    ])
  }
}