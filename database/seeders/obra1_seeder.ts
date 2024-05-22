import Alerta from '#models/alerta/alerta'
import Articulo from '#models/articulo/articulo'
import AsoCliObr from '#models/asociaciones/aso_cli_obr'
import Cliente from '#models/cliente/cliente'
import Estado from '#models/estado/estado'
import TipEstado from '#models/estado/tip_est'
import Etapa from '#models/etapa/etapa'
import Modulo from '#models/modulo/modulo'
import Obra from '#models/obra/obra'
import GruPer from '#models/personal/gru_per'
import PerRol from '#models/personal/per_rol'
import Personal from '#models/personal/personal'
import LisPre from '#models/proveedor/lis_pre'
import Proveedor from '#models/proveedor/proveedor'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import PerTarea from '#models/tarea/det_tarea/per_tarea'
import Tarea from '#models/tarea/tarea'
import UniMed from '#models/uni_med/uni_med'
import User from '#models/user/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    // USUARIOS
    await User.createMany([
      {
        username: 'User1',
        email: 'user1@example.com',
        password: 'password1',
        avatarUrl: null,
        enabled: true,
      },
      {
        username: 'User2',
        email: 'user2@example.com',
        password: 'password2',
        avatarUrl: null,
        enabled: true,
      }
    ]);
    // END USUARIOS


    // ESTADOS
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
        tip_estado_id: 1,
      },
      {
        nombre: 'Estado 2',
        habilitado: true,
        tip_estado_id: 1,
      },
      {
        nombre: 'Estado 3',
        habilitado: true,
        tip_estado_id: 2,
      },
    ]),
    //END ESTADOS


    // CLIENTE, PERSONAL, GRUPO PERSONAL, ROL PERSONAL
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
    ]),

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
    //END CLIENTE, PERSONAL, GRUPO PERSONAL, ROL PERSONAL


    //PROVEEDOR, UNIDAD MEDIDA, ARTICULO, LISTA PRECIO, 
    await Proveedor.createMany([
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
    ]);

    await UniMed.createMany([
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
    ]),

    await Articulo.createMany([
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
      {
      nombre: 'Articulo 4',
      descripcion: 'Descripcion del articulo 4',
      habilitado: true,
      },
      {
      nombre: 'Articulo 5',
      descripcion: 'Descripcion del articulo 5',
      habilitado: true,
      },
    ])

    //LISTA PRECIO
    const articulos = await Articulo.all();
    const lisPreData = articulos.map((articulo) => ({
      nombre: 'Lista 1',
      precio: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      proveedor_id: 1,
      articulo_id: articulo.id,
    }));

    await LisPre.createMany(lisPreData);

    const lisPreData2 = articulos.map((articulo) => ({
      nombre: 'Lista 2',
      precio: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      proveedor_id: 2,
      articulo_id: articulo.id,
    }));

    await LisPre.createMany(lisPreData2);
    //END PROVEEDOR, UNIDAD MEDIDA, ARTICULO, LISTA PRECIO,

    //OBRA, ETAPA, MODULO
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
    ]),
    //END OBRA, ETAPA, MODULO

    //TAREA, ALERTA, ARTICULO TAREA
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
    ]),
    //END TAREA, ALERTA, ARTICULO TAREA
    
    await AsoCliObr.createMany( [
      {
        obra_id: 1,
        cliente_id: 1,
      },
      {
        obra_id: 2,
        cliente_id: 2,
      },
      {
        obra_id: 2,
        cliente_id: 1,
      },
    ])
  }
}