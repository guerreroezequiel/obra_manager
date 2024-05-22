import Cliente from '#models/cliente/cliente'
import GruPer from '#models/personal/gru_per'
import PerRol from '#models/personal/per_rol'
import Personal from '#models/personal/personal'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Personal.createMany( [   
      {
        nombre: 'Personal 1',
        mail: 'personal1@mail.com',
        tel: '1234567890',
        direccion: 'Direccion 1',
        descripcion: 'Descripcion 1',
        habilitado: true,
      },
      {
        nombre: 'Personal 2',
        mail: 'personal2@mail.com',
        tel: '0987654321',
        direccion: 'Direccion 2',
        descripcion: 'Descripcion 2',
        habilitado: true,
      },
      {
        nombre: 'Personal 3',
        mail: 'personal3@mail.com',
        tel: '1122334455',
        direccion: 'Direccion 3',
        descripcion: 'Descripcion 3',
        habilitado: true,
      },
    ]),

    await PerRol.createMany( [   
      {
        nombre: 'Rol 1',
        descripcion: 'Descripción del Rol 1',
        habilitado: true,
      },
      {
        nombre: 'Rol 2',
        descripcion: 'Descripción del Rol 2',
        habilitado: true,
      },
      {
        nombre: 'Rol 3',
        descripcion: 'Descripción del Rol 3',
        habilitado: true,
      },
    ]),

    await GruPer.createMany( [   
      {
        nombre: 'Grupo 1',
        descripcion: 'Descripción del Grupo 1',
        habilitado: true,
        estado_id: 1,
      },
      {
        nombre: 'Grupo 2',
        descripcion: 'Descripción del Grupo 2',
        habilitado: true,
        estado_id: 2,
      },
    ]),

    await Cliente.createMany( [   
      {
        nombre: 'cliente 1',
        mail: 'cliente1@mail.com',
        tel: '1234567890',
        direccion: 'Direccion 1',
        descripcion: 'Descripcion 1',
        habilitado: true,
      },
      {
        nombre: 'cliente 2',
        mail: 'cliente2@mail.com',
        tel: '0987654321',
        direccion: 'Direccion 2',
        descripcion: 'Descripcion 2',
        habilitado: true,
      },
      {
        nombre: 'cliente 3',
        mail: 'cliente3@mail.com',
        tel: '1122334455',
        direccion: 'Direccion 3',
        descripcion: 'Descripcion 3',
        habilitado: true,
      },
    ])
  }
}