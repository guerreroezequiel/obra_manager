import Articulo from '#models/articulo/articulo'
import LisPre from '#models/proveedor/lis_pre'
import Proveedor from '#models/proveedor/proveedor'
import UniMed from '#models/uni_med/uni_med'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {


    await Proveedor.createMany( [
      {
        nombre: 'Proveedor 1',
        mail: 'proveedor1@mail.com',
        tel: '1234567890',
        habilitado: true,
        direccion: 'Direccion 1',
        descripcion: 'Descripcion del Proveedor 1',
        estado_id: 1,
      },
      {
        nombre: 'Proveedor 2',
        mail: 'proveedor2@mail.com',
        tel: '0987654321',
        habilitado: true,
        direccion: 'Direccion 2',
        descripcion: 'Descripcion del Proveedor 2',
        estado_id: 2,
      },
    ]),

    await LisPre.createMany( [ 
      {
        nombre: 'Lista 1',
        precio: 100,
        proveedor_id: 1,
        articulo_id: 1,
      },
      {
        nombre: 'Lista 2',
        precio: 200,
        proveedor_id: 2,
        articulo_id: 2,
      },
    ]),

    await Articulo.createMany( [
      {
        nombre: 'Articulo 1',
        descripcion: 'Descripcion del articulo 1',
        habilitado: true,
      },
      {
        nombre: 'Articulo 2',
        descripcion: 'Descripcion del articulo 2',
        habilitado: true,
      },
      {
        nombre: 'Articulo 3',
        descripcion: 'Descripcion del articulo 3',
        habilitado: true,
      },
    ]),

    await UniMed.createMany( [
      {
        nombre: 'Unidad 1',
        descripcion: 'Descripcion de la Unidad 1',
        habilitado: true,
      },
      {
        nombre: 'Unidad 2',
        descripcion: 'Descripcion de la Unidad 2',
        habilitado: true,
      },
      {
        nombre: 'Unidad 3',
        descripcion: 'Descripcion de la Unidad 3',
        habilitado: true,
      },
    ])
  }
}