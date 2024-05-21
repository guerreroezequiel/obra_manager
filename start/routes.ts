import router from '@adonisjs/core/services/router'
import SessionController from '#controllers/session_controller'
import UsersController from '#controllers/users_controller'
import AlertasController from '#controllers/alertas_controller'
import ArticulosController from '#controllers/articulos_controller'
import ClientesController from '#controllers/clientes_controller'
import EstadosController from '#controllers/estados_controller'
import EtapasController from '#controllers/etapas_controller'
import ModulosController from '#controllers/modulos_controller'
import ObrasController from '#controllers/obras_controller'
import PersonalsController from '#controllers/personals_controller'
import ProveedoresController from '#controllers/proveedores_controller'
import TareasController from '#controllers/tareas_controller'
import UniMedsController from '#controllers/uni_meds_controller'
import ArtTareasController from '#controllers/art_tareas_controller'
import PerTareasController from '#controllers/per_tareas_controller'
import TipEstadosController from '#controllers/tip_ests_controller'
import PerRolsController from '#controllers/per_rols_controller'
import LisPresController from '#controllers/lis_pres_controller'
// import { middleware } from './kernel.js'



//SESSION
router.post('/login', [SessionController, 'create'])
router.post('/logout', [SessionController, 'delete'])


//USERS
router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])
router.post('/users', [UsersController, 'create'])
router.put('/users/:id', [UsersController, 'update'])  
router.delete('/users/:id', [UsersController, 'delete'])


//ALERTAS
router.get('/alertas', [AlertasController, 'index'])
router.get('/alertas/:id', [AlertasController, 'show'])
router.post('/alertas', [AlertasController, 'create'])
router.put('/alertas/:id', [AlertasController, 'update'])
router.delete('/alertas/:id', [AlertasController, 'delete'])


//ARTICULOS
router.get('/articulos', [ArticulosController, 'index'])
router.get('/articulos/:id', [ArticulosController, 'show'])
router.post('/articulos', [ArticulosController, 'create'])
router.put('/articulos/:id', [ArticulosController, 'update'])
router.delete('/articulos/:id', [ArticulosController, 'delete'])


//CLIENTES
router.get('/clientes', [ClientesController, 'index'])
router.get('/clientes/:id', [ClientesController, 'show'])
router.post('/clientes', [ClientesController, 'create'])
router.put('/clientes/:id', [ClientesController, 'update'])
router.delete('/clientes/:id', [ClientesController, 'delete'])


//ESTADOS
router.get('/estados', [EstadosController, 'index'])
router.get('/estados/:id', [EstadosController, 'show'])
router.post('/estados', [EstadosController, 'create'])
router.put('/estados/:id', [EstadosController, 'update'])
router.delete('/estados/:id', [EstadosController, 'delete'])

  //TIP_ESTADOS
  router.get('/tip_estados', [TipEstadosController, 'index'])
  router.get('/tip_estados/:id', [TipEstadosController, 'show'])
  router.post('/tip_estados', [TipEstadosController, 'create'])
  router.put('/tip_estados/:id', [TipEstadosController, 'update'])
  router.delete('/tip_estados/:id', [TipEstadosController, 'delete'])


//ETAPAS
router.get('/etapas', [EtapasController, 'index'])
router.get('/etapas/:id', [EtapasController, 'show'])
router.post('/etapas', [EtapasController, 'create'])
router.put('/etapas/:id', [EtapasController, 'update'])
router.delete('/etapas/:id', [EtapasController, 'delete'])


//MODULOS
router.get('/modulos', [ModulosController, 'index'])
router.get('/modulos/:id', [ModulosController, 'show'])
router.post('/modulos', [ModulosController, 'create'])
router.put('/modulos/:id', [ModulosController, 'update'])
router.delete('/modulos/:id', [ModulosController, 'delete'])


//OBRAS
router.get('/obras', [ObrasController, 'index'])
router.get('/obras/:id', [ObrasController, 'show'])
router.post('/obras', [ObrasController, 'create'])
router.put('/obras/:id', [ObrasController, 'update'])
router.delete('/obras/:id', [ObrasController, 'delete'])


//PERSONAL
router.get('/personal', [PersonalsController, 'index'])
router.get('/personal/:id', [PersonalsController, 'show'])
router.post('/personal', [PersonalsController, 'create'])
router.put('/personal/:id', [PersonalsController, 'update'])
router.delete('/personal/:id', [PersonalsController, 'delete'])

  //PER_ROLES
  router.get('/per_rol', [PerRolsController, 'index'])
  router.get('/per_rol/:id', [PerRolsController, 'show'])
  router.post('/per_rol', [PerRolsController, 'create'])
  router.put('/per_rol/:id', [PerRolsController, 'update'])
  router.delete('/per_rol/:id', [PerRolsController, 'delete'])


//PROVEEDORES
router.get('/proveedores', [ProveedoresController, 'index'])
router.get('/proveedores/:id', [ProveedoresController, 'show'])
router.post('/proveedores', [ProveedoresController, 'create'])
router.put('/proveedores/:id', [ProveedoresController, 'update'])
router.delete('/proveedores/:id', [ProveedoresController, 'delete'])

  //LIS_PRE
  router.get('/lis_pre', [LisPresController, 'index'])
  router.get('/lis_pre/:id', [LisPresController, 'show'])
  router.post('/lis_pre', [LisPresController, 'create'])
  router.put('/lis_pre/:id', [LisPresController, 'update'])
  router.delete('/lis_pre/:id', [LisPresController, 'delete'])


//TAREAS
router.get('/tareas', [TareasController, 'index'])
router.get('/tareas/:id', [TareasController, 'show'])
router.post('/tareas', [TareasController, 'create'])
router.put('/tareas/:id', [TareasController, 'update'])
router.delete('/tareas/:id', [TareasController, 'delete'])

  //ART_TAREAS
  router.get('/art_tareas', [ArtTareasController, 'index'])
  router.get('/art_tareas/:id', [ArtTareasController, 'show'])
  router.post('/art_tareas', [ArtTareasController, 'create'])
  router.put('/art_tareas/:id', [ArtTareasController, 'update'])
  router.delete('/art_tareas/:id', [ArtTareasController, 'delete'])

  //PER_TAREAS
  router.get('/per_tareas', [PerTareasController, 'index'])
  router.get('/per_tareas/:id', [PerTareasController, 'show'])
  router.post('/per_tareas', [PerTareasController, 'create'])
  router.put('/per_tareas/:id', [PerTareasController, 'update'])
  router.delete('/per_tareas/:id', [PerTareasController, 'delete'])


//UNI_MED
router.get('/uni_med', [UniMedsController, 'index']) 
router.get('/uni_med/:id', [UniMedsController, 'show'])
router.post('/uni_med', [UniMedsController, 'create'])
router.put('/uni_med/:id', [UniMedsController, 'update'])
router.delete('/uni_med/:id', [UniMedsController, 'delete'])


//ASOCIACIONES

//ASO_CLI_OBR















