import Alerta from '#models/alerta/alerta'
import Articulo from '#models/articulo/articulo'
import Marca from '#models/articulo/marca'
import Presentacion from '#models/articulo/presentacion'
import Rubro from '#models/articulo/rubro'
import Tipo from '#models/articulo/tipo'
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
import LisPreIds from '#models/proveedor/lis_pre_ids'
import Proveedor from '#models/proveedor/proveedor'
import ArtTarea from '#models/tarea/det_tarea/art_tarea'
import PerTarea from '#models/tarea/det_tarea/per_tarea'
import Tarea from '#models/tarea/tarea'
import UniMed from '#models/uni_med/uni_med'
import User from '#models/user/user'
import UserFieldSetting from '#models/user/user_field_setting'
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
    await TipEstado.createMany([
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

      await Estado.createMany([
        {
          nombre: 'Estado 1',
          habilitado: true,
          tipEstId: 1,
        },
        {
          nombre: 'Estado 2',
          habilitado: true,
          tipEstId: 1,
        },
        {
          nombre: 'Estado 3',
          habilitado: true,
          tipEstId: 2,
        },
      ]),


      // CLIENTE, PERSONAL, GRUPO PERSONAL, ROL PERSONAL
      await Cliente.createMany([
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

      await Personal.createMany([
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

      await PerRol.createMany([
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

      await GruPer.createMany([
        {
          nombre: 'Grupo 1',
          descripcion: 'Descripción del Grupo 1',
          habilitado: true,
          estadoId: 1,
        },
        {
          nombre: 'Grupo 2',
          descripcion: 'Descripción del Grupo 2',
          habilitado: true,
          estadoId: 2,
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
          estadoId: 1,
        },
        {
          nombre: 'Proveedor 2',
          mail: 'proveedor2@mail.com',
          tel: '0987654321',
          habilitado: true,
          direccion: 'Direccion 2',
          descripcion: 'Descripcion del Proveedor 2',
          estadoId: 2,
        },
      ]);

    await UniMed.createMany([
      {
        id: 'mts',
        nombre: 'metros',
      },
      {
        id: 'm2',
        nombre: 'metros cuadrados',
      },
      {
        id: 'm3',
        nombre: 'metros cubicos',
      },
      {
        id: 'kg',
        nombre: 'kilogramos',
      },
      {
        id: 'lts',
        nombre: 'litros',
      },
    ]),

      //TIPO, RUBRO, MARCA, PRESENTACION
      //tipo
      await Tipo.createMany([
        {
          nombre: 'Tipo 1',
        },
        {
          nombre: 'Tipo 2',
        },
        {
          nombre: 'Tipo 3',
        },
      ]);

    //rubro
    await Rubro.createMany([
      {
        nombre: 'Rubro 1',
      },
      {
        nombre: 'Rubro 2',
      },
      {
        nombre: 'Rubro 3',
      },
    ]);

    //marca
    await Marca.createMany([
      {
        nombre: 'Marca 1',
      },
      {
        nombre: 'Marca 2',
      },
      {
        nombre: 'Marca 3',
      },
    ]);

    //presentacion
    await Presentacion.createMany([
      {
        nombre: 'Presentacion 1',
      },
      {
        nombre: 'Presentacion 2',
      },
      {
        nombre: 'Presentacion 3',
      },
    ]);

    await Articulo.createMany([
      {
        nombre: 'Articulo 1',
        descripcion: 'Descripcion del articulo 1',
        habilitado: true,
        uniMedId: 'mts',
        uniMedPack: 'm2',
        canPack: 10,
        rendimiento: 5.22,
        rubroId: 1,
        marcaId: 2,
        tipoId: 1,
        presentacionId: 1,
      },
      {
        nombre: 'Articulo 2',
        descripcion: 'Descripcion del articulo 2',
        habilitado: false,
        uniMedId: 'm2',
        uniMedPack: 'm2',
        canPack: 15,
        rendimiento: 3.14,
        rubroId: 1,
        marcaId: 2,
        tipoId: 3,
        presentacionId: 2,
      },
      {
        nombre: 'Articulo 3',
        descripcion: 'Descripcion del articulo 3',
        habilitado: true,
        uniMedId: 'kg',
        uniMedPack: 'm3',
        canPack: 20,
        rendimiento: 2.71,
        rubroId: 3,
        marcaId: 1,
        tipoId: 3,
        presentacionId: 3,
      },
      {
        nombre: 'Articulo 4',
        descripcion: 'Descripcion del articulo 4',
        habilitado: false,
        uniMedId: 'lts',
        uniMedPack: 'm3',
        canPack: 25,
        rendimiento: 1.61,
        rubroId: 3,
        marcaId: 3,
        tipoId: 2,
        presentacionId: 1,
      },
      {
        nombre: 'Articulo 5',
        descripcion: 'Descripcion del articulo 5',
        habilitado: true,
        uniMedId: 'mts',
        uniMedPack: 'kg',
        canPack: 30,
        rendimiento: 4.56,
        rubroId: 3,
        marcaId: 2,
        tipoId: 1,
        presentacionId: 1,
      },
      {
        nombre: 'Articulo 6',
        descripcion: 'Descripcion del articulo 6',
        habilitado: false,
        uniMedId: 'kg',
        uniMedPack: 'lts',
        canPack: 35,
        rendimiento: 3.89,
        rubroId: 1,
        marcaId: 2,
        tipoId: 1,
        presentacionId: 2,
      },
      {
        nombre: 'Articulo 7',
        descripcion: 'Descripcion del articulo 7',
        habilitado: true,
        uniMedId: 'm3',
        uniMedPack: 'm3',
        canPack: 40,
        rendimiento: 2.98,
        rubroId: 3,
        marcaId: 3,
        tipoId: 2,
        presentacionId: 2,
      },
      {
        nombre: 'Articulo 8',
        descripcion: 'Descripcion del articulo 8',
        habilitado: false,
        uniMedId: 'kg',
        uniMedPack: 'kg',
        canPack: 45,
        rendimiento: 1.73,
        rubroId: 2,
        marcaId: 2,
        tipoId: 3,
        presentacionId: 3,
      }

    ])

    //LIS PRE IDS
    await LisPreIds.createMany([
      {
        nombre: 'Lista 1',
      },
      {
        nombre: 'Lista 2',
      }
    ]);

    //LISTA PRECIO
    const articulos = await Articulo.all();
    const lisPreData = articulos.map((articulo) => ({
      listaId: 1,
      precioVenta: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      proveedorId: 1,
      articuloId: articulo.id,
    }));

    await LisPre.createMany(lisPreData);

    const lisPreData2 = articulos.map((articulo) => ({
      listaId: 2,
      precioVenta: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      proveedorId: 2,
      articuloId: articulo.id,
    }));

    await LisPre.createMany(lisPreData2);
    //END PROVEEDOR, UNIDAD MEDIDA, ARTICULO, LISTA PRECIO,

    //OBRA, ETAPA, MODULO
    await Obra.createMany([
      {
        nombre: 'Obra 1',
        descripcion: 'Descripcion de la Obra 1',
        medida: 110,
        habilitado: true,
        estadoId: 1,
      },
      {
        nombre: 'Obra 2',
        descripcion: 'Descripcion de la Obra 2',
        habilitado: true,
        estadoId: 2,
      },
    ]),

      await Etapa.createMany([
        {
          nombre: 'Etapa 1',
          descripcion: 'Descripcion de la Etapa 1',
          habilitado: true,
          obraId: 1,
        },
        {
          nombre: 'Etapa 2',
          descripcion: 'Descripcion de la Etapa 2',
          habilitado: true,
          obraId: 1,
        },
      ]),

      await Modulo.createMany([
        {
          nombre: 'Modulo 1',
          descripcion: 'Descripcion del Modulo etapa 1',
          habilitado: true,
          etapaId: 1,
        },
        {
          nombre: 'Modulo 2',
          descripcion: 'Descripcion del Modulo etapa 1',
          habilitado: true,
          etapaId: 1,
        },
        {
          nombre: 'Modulo 3',
          descripcion: 'Descripcion del Modulo etapa 1',
          habilitado: true,
          etapaId: 1,
        },
        {
          nombre: 'Modulo 4',
          descripcion: 'Descripcion del Modulo etapa 1',
          habilitado: true,
          etapaId: 2,
        },
        {
          nombre: 'Modulo 1',
          descripcion: 'Descripcion del Modulo etapa 2',
          habilitado: true,
          etapaId: 2,
        },
      ]),
      //END OBRA, ETAPA, MODULO

      //TAREA, ALERTA, ARTICULO TAREA
      await Tarea.createMany([
        {
          nombre: 'Tarea 1',
          descripcion: 'Descripcion de la tarea 1',
          moduloId: 1,
        },
        {
          nombre: 'Tarea 2',
          descripcion: 'Descripcion de la tarea 2',
          moduloId: 1,
        },
        {
          nombre: 'Tarea 3',
          descripcion: 'Descripcion de la tarea 3',
          moduloId: 1,
        },

        {
          nombre: 'Tarea 1',
          descripcion: 'Descripcion de la tarea 1',
          moduloId: 1,
        },
        {
          nombre: 'Tarea 2',
          descripcion: 'Descripcion de la tarea 2',
          moduloId: 2,
        },
        {
          nombre: 'Tarea 3',
          descripcion: 'Descripcion de la tarea 3',
          moduloId: 2,
        },
        {
          nombre: 'Tarea 1',
          descripcion: 'Descripcion de la tarea 1',
          moduloId: 3,
        },
        {
          nombre: 'Tarea 2',
          descripcion: 'Descripcion de la tarea 2',
          moduloId: 3,
        },
        {
          nombre: 'Tarea 3',
          descripcion: 'Descripcion de la tarea 3',
          moduloId: 3,
        },
        {
          nombre: 'Tarea 1',
          descripcion: 'Descripcion de la tarea 1',
          moduloId: 4,
        },
        {
          nombre: 'Tarea 2',
          descripcion: 'Descripcion de la tarea 2',
          moduloId: 4,
        },
        {
          nombre: 'Tarea 3',
          descripcion: 'Descripcion de la tarea 3',
          moduloId: 4,
        },
        {
          nombre: 'Tarea 3',
          descripcion: 'Descripcion de la tarea 3',
          moduloId: 4,
        },
      ]),

      //detalle tarea (personal articulo)
      await PerTarea.createMany([
        {
          personalId: 1,
          tareaId: 1,
        },
        {
          personalId: 2,
          tareaId: 1,
        },
        {
          personalId: 2,
          tareaId: 2,
        },
        {
          personalId: 3,
          tareaId: 3,
        }
      ]);

    const artTareasData = [];
    const uniMedArray = ['mts', 'm2', 'm3', 'kg', 'lts'];
    const uniMedId = uniMedArray[Math.floor(Math.random() * uniMedArray.length)];

    for (let i = 1; i <= 25; i++) {
      artTareasData.push({
        descripcion: `Descripcion del articulo ${i}`,
        cantidad: i,
        tareaId: i % 3 + 1, // Esto distribuirá los artículos entre las tareas 1, 2 y 3
        articuloId: i % 5 + 1,
        uniMedId: uniMedId as string,
      });
    }

    await ArtTarea.createMany(artTareasData)

    await Alerta.createMany([
      {
        nombre: 'Alerta 1',
        descripcion: 'Descripcion de la Alerta 1',
        visto: false,
        estadoId: 1,
        tareaId: 1,
      },
      {
        nombre: 'Alerta 2',
        descripcion: 'Descripcion de la Alerta 2',
        visto: false,
        estadoId: 2,
        tareaId: 2,
      },
    ]),
      //END TAREA, ALERTA, ARTICULO TAREA

      // USER FIELD SETTINGS
      await UserFieldSetting.createMany([

        // settings lis_pre_ids
        {
          userId: 1,
          tableName: 'lis_pre_ids',
          fieldName: 'id',
          type: 'id',
          tag: 'ID',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre_ids',
          fieldName: 'nombre',
          type: 'text',
          tag: 'Nombre',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },

        // settings lis_pre
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'id',
          type: 'id',
          tag: 'ID',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'listaId',
          tag: 'Lista',
          type: 'list',
          width: 100,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'precioVenta',
          type: 'price',
          tag: 'Precio de venta',
          width: 100,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'precioCompra',
          type: 'price',
          tag: 'Precio de compra',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'markup',
          type: 'percent',
          tag: 'Precio',
          width: 100,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'proveedorId',
          tag: 'Proveedor',
          type: 'search',
          width: 100,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'articuloId',
          tag: 'Articulo ID',
          type: 'search',
          width: 100,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'createdAt',
          type: 'date',
          tag: 'Creado en',
          width: 200,
          order: 8,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 9,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'lis_pre',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 10,
          isEditable: true,
          isHidden: false
        },



        //settings articulos
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'id',
          type: 'id',
          tag: 'ID',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'nombre',
          type: 'text',
          tag: 'Nombre',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'descripcion',
          type: 'text',
          tag: 'Descripción',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'habilitado',
          type: 'check',
          tag: 'Habilitado',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'uniMedId',
          type: 'list',
          tag: 'Uni.Med. Articulo',
          width: 100,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'uniMedPack',
          type: 'list',
          tag: 'Uni.Med. Pack',
          width: 100,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'canPack',
          type: 'number',
          tag: 'Can. x Pack',
          width: 100,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'rendimiento',
          type: 'number',
          tag: 'Rendimiento',
          width: 100,
          order: 8,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'rubroId',
          type: 'search',
          tag: 'Rubro',
          width: 100,
          order: 9,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'marcaId',
          type: 'search',
          tag: 'Marca',
          width: 100,
          order: 10,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'tipoId',
          type: 'search',
          tag: 'Tipo',
          width: 100,
          order: 11,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'articulos',
          fieldName: 'presentacionId',
          type: 'list',
          tag: 'Presentación',
          width: 100,
          order: 12,
          isEditable: true,
          isHidden: false
        },
        // settings clientes
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'mail',
          tag: 'Correo',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'tel',
          tag: 'Teléfono',
          type: 'text',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'direccion',
          tag: 'Dirección',
          type: 'text',
          width: 200,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'catIva',
          tag: 'Categoria IVA',
          type: 'list',
          width: 200,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          type: 'check',
          width: 100,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'estadoId',
          tag: 'Estado',
          type: 'list',
          width: 100,
          order: 8,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 9,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'cliente',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 10,
          isEditable: false,
          isHidden: false
        },

        //settings etapas
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'total',
          tag: 'Total',
          type: 'price',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          type: 'check',
          width: 100,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'estadoId',
          tag: 'Estado',
          type: 'list',
          width: 100,
          order: 8,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'obraId',
          tag: 'Obra',
          type: 'id',
          width: 100,
          order: 9,
          isEditable: true,
          isHidden: true
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 10,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'etapa',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 11,
          isEditable: false,
          isHidden: false
        },

        //settings modulos
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          type: 'check',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'etapaId',
          tag: 'Etapa',
          type: 'id',
          width: 100,
          order: 6,
          isEditable: true,
          isHidden: true
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'estadoId',
          tag: 'Estado',
          type: 'list',
          width: 100,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 8,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'modulo',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 9,
          isEditable: false,
          isHidden: false
        },

        //settings obras
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'total',
          tag: 'Total',
          type: 'price',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'subtotal',
          tag: 'Subtotal',
          type: 'price',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },

        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'descuento',
          tag: 'Descuento',
          type: 'percent',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'medida',
          tag: 'Medida',
          type: 'number',
          width: 100,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          type: 'check',
          width: 100,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'estadoId',
          tag: 'Estado',
          type: 'list',
          width: 100,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 8,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 9,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'obra',
          fieldName: 'clienteId',
          tag: 'Cliente',
          type: 'search',
          width: 200,
          order: 10,
          isEditable: true,
          isHidden: false
        },

        //settings personal
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'direccion',
          tag: 'Dirección',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'perRolId',
          tag: 'Rol',
          type: 'list',
          width: 100,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'perTareaId',
          tag: 'Tarea',
          type: 'id',
          width: 100,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 7,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'personal',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 8,
          isEditable: false,
          isHidden: false
        },

        //settings proveedor
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'mail',
          tag: 'Correo Electrónico',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'tel',
          tag: 'Teléfono',
          type: 'text',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          type: 'check',
          width: 100,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'direccion',
          tag: 'Dirección',
          type: 'text',
          width: 200,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'estadoId',
          tag: 'Estado',
          type: 'list',
          width: 100,
          order: 8,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 9,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'proveedor',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 10,
          isEditable: false,
          isHidden: false
        },

        //settings art_tarea
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'articuloId',
          tag: 'Articulo ID',
          type: 'search',
          width: 50,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'articuloNombre',
          tag: 'Articulo',
          type: 'string',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'uniMedId',
          tag: 'Uni. Med.',
          type: 'list',
          width: 50,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'string',
          width: 200,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'cantidad',
          tag: 'Cantidad',
          type: 'number',
          width: 50,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'precioUnitario',
          tag: 'Precio Unitario',
          type: 'price',
          width: 50,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'total',
          tag: 'Total',
          type: 'price',
          width: 50,
          order: 8,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'subtotal',
          tag: 'subtotal',
          type: 'price',
          width: 50,
          order: 9,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'descuento',
          tag: 'Descuento',
          type: 'percent',
          width: 50,
          order: 10,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'tareaId',
          tag: 'Tarea ID',
          type: 'id',
          width: 50,
          order: 11,
          isEditable: true,
          isHidden: true
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 12,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'art_tarea',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 13,
          isEditable: false,
          isHidden: false
        },

        //settings tareas
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'descripcion',
          tag: 'Descripción',
          type: 'text',
          width: 200,
          order: 3,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'total',
          tag: 'Total',
          type: 'price',
          width: 100,
          order: 4,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'habilitado',
          tag: 'Habilitado',
          type: 'check',
          width: 100,
          order: 5,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'condicion',
          tag: 'Condición',
          type: 'list',
          width: 200,
          order: 6,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'condBool',
          tag: 'Aplica?',
          type: 'check',
          width: 100,
          order: 7,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'moduloId',
          tag: 'Módulo',
          type: 'id',
          width: 100,
          order: 9,
          isEditable: true,
          isHidden: true
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'estadoId',
          tag: 'Estado',
          type: 'list',
          width: 100,
          order: 10,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'createdAt',
          tag: 'Creado en',
          type: 'date',
          width: 200,
          order: 11,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tarea',
          fieldName: 'updatedAt',
          tag: 'Actualizado en',
          type: 'date',
          width: 200,
          order: 12,
          isEditable: false,
          isHidden: false
        },

        //settings rubros
        {
          userId: 1,
          tableName: 'rubros',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'rubros',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },

        //settings marcas
        {
          userId: 1,
          tableName: 'marcas',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'marcas',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },

        //settings tipos
        {
          userId: 1,
          tableName: 'tipos',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'tipos',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },

        //settings presentaciones
        {
          userId: 1,
          tableName: 'presentacions',
          fieldName: 'id',
          tag: 'ID',
          type: 'id',
          width: 50,
          order: 1,
          isEditable: false,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'presentacions',
          fieldName: 'nombre',
          tag: 'Nombre',
          type: 'text',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },

        //settings uni_med
        {
          userId: 1,
          tableName: 'uni_meds',
          fieldName: 'id',
          type: 'id',
          tag: 'ID',
          width: 50,
          order: 1,
          isEditable: true,
          isHidden: false
        },
        {
          userId: 1,
          tableName: 'uni_meds',
          fieldName: 'nombre',
          type: 'text',
          tag: 'Nombre',
          width: 200,
          order: 2,
          isEditable: true,
          isHidden: false
        },
      ]);
    // END USER FIELD SETTINGS
  }
  //END ESTADOS
}