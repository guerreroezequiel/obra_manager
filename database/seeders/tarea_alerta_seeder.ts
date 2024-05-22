import Alerta from '#models/alerta/alerta'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import PerTarea from '#models/tarea/det_tarea/per_tarea'
import Tarea from '#models/tarea/tarea'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {


    await Tarea.createMany( [
      {
        nombre: 'Tarea 1',
        descripcion: 'Descripcion de la tarea 1',
        condicion: 'Condicion de la tarea 1',
      },
      {
        nombre: 'Tarea 2',
        descripcion: 'Descripcion de la tarea 2',
        condicion: 'Condicion de la tarea 2',
      },
      {
        nombre: 'Tarea 3',
        descripcion: 'Descripcion de la tarea 3',
        condicion: 'Condicion de la tarea 3',
      },
    ]),

    //detalle tarea (personal articulo)
    await PerTarea.createMany( [   
      {
        personal_id: 1,
        tarea_id: 1,
      },
      {
        personal_id: 2,
        tarea_id: 2,
      },
      {
        personal_id: 3,
        tarea_id: 3,
      },
    ]),

    await ArtTarea.createMany( [   
      {
        nombre: 'Articulo 1',
        descripcion: 'Descripcion del articulo 1',
        hereda_med: false,
        cantidad: 1,
        tarea_id: 1,
        articulo_id: 1,
      },
      {
        nombre: 'Articulo 2',
        descripcion: 'Descripcion del articulo 2',
        hereda_med: false,
        cantidad: 2,
        tarea_id: 2,
        articulo_id: 2,
      },
      {
        nombre: 'Articulo 3',
        descripcion: 'Descripcion del articulo 3',
        hereda_med: false,
        cantidad: 3,
        tarea_id: 3,
        articulo_id: 3,
      },
    ]),

    await Alerta.createMany( [
      {
        nombre: 'Alerta 1',
        descripcion: 'Descripcion de la Alerta 1',
        visto: false,
        estado_id: 1,
        tarea_id: 1,
      },
      {
        nombre: 'Alerta 2',
        descripcion: 'Descripcion de la Alerta 2',
        visto: false,
        estado_id: 2,
        tarea_id: 2,
      },
    ])

  }

}