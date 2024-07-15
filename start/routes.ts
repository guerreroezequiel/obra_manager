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
import UserFieldSettingsController from '#controllers/user_field_settings_controller'
import PresentacionsController from '#controllers/presentacions_controller'
import MarcasController from '#controllers/marcas_controller'
import TiposController from '#controllers/tipos_controller'
import RubrosController from '#controllers/rubros_controller'
// import { middleware } from './kernel.js'

//MODELOS
router.get('/models/obras', [ObrasController, 'getObraModel'])
router.get('/models/personals', [PersonalsController, 'getPersonalsModel'])
router.get('/models/clientes', [ClientesController, 'getClientesModel'])
router.get('/models/proveedors', [ProveedoresController, 'getProveedorsModel'])
router.get('/models/articulos', [ArticulosController, 'getArticulosModel'])
router.get('/models/tareas', [TareasController, 'getTareasModel'])
router.get('/models/uni_meds', [UniMedsController, 'getUniMedsModel'])
router.get('/models/art_tareas', [ArtTareasController, 'getArtTareasModel'])
router.get('/models/per_tareas', [PerTareasController, 'getPerTareasModel'])
router.get('/models/estados', [EstadosController, 'getEstadosModel'])
router.get('/models/tip_estados', [TipEstadosController, 'getTipEstadosModel'])
router.get('/models/per_rols', [PerRolsController, 'getPerRolsModel'])
router.get('/models/lis_pres', [LisPresController, 'getLisPresModel'])
router.get('/models/modulos', [ModulosController, 'getModulosModel'])
router.get('/models/alertas', [AlertasController, 'getAlertasModel'])
router.get('/models/etapas', [EtapasController, 'getEtapasModel'])

//CAMPOS EDITABLES
router.get('/editables/obras', [ObrasController, 'getEditableFields'])
router.get('/editables/etapas', [EtapasController, 'getEditableFields'])
router.get('/editables/tareas', [TareasController, 'getEditableFields'])
router.get('/editables/art_tareas', [ArtTareasController, 'getEditableFields'])
router.get('/editables/articulos', [ArticulosController, 'getEditableFields'])
router.get('/editables/personals', [PersonalsController, 'getEditableFields'])
router.get('/editables/clientes', [ClientesController, 'getEditableFields'])
router.get('/editables/proveedors', [ProveedoresController, 'getEditableFields'])


//SESSION
router.post('/login', [SessionController, 'create'])
router.post('/logout', [SessionController, 'delete'])


//USERS
router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])
router.post('/users', [UsersController, 'create'])
router.put('/users/:id', [UsersController, 'update'])
router.delete('/users/:id', [UsersController, 'delete'])

//USER FIELD SETTINGS
router.get('/user_field_settings', [UserFieldSettingsController, 'indexById'])
router.get('/user_field_settings/table/:tableName', [UserFieldSettingsController, 'index'])
router.get('/user_field_settings/:id', [UserFieldSettingsController, 'show'])
router.post('/user_field_settings', [UserFieldSettingsController, 'create'])
router.put('/user_field_settings/:id', [UserFieldSettingsController, 'update'])
router.put('/user_field_settings/:userId/:id', [UserFieldSettingsController, 'updateByUserIdAndId'])


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
router.get('/obras/:id/relations', [ObrasController, 'getObraRelations'])
router.get('/obras/:id/full', [ObrasController, 'getObraFullDetails'])


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
router.post('/tareas/copy/:id', [TareasController, 'copy'])

//ART_TAREAS
router.get('/art_tareas', [ArtTareasController, 'index'])
router.get('/art_tareas/tarea/:id', [ArtTareasController, 'getArticuloFromTarea'])
router.get('/art_tareas/:id', [ArtTareasController, 'show'])
router.post('/art_tareas', [ArtTareasController, 'create'])
router.put('/art_tareas/:id', [ArtTareasController, 'update'])
router.delete('/art_tareas/:id', [ArtTareasController, 'delete'])

//PER_TAREAS
router.get('/per_tareas', [PerTareasController, 'index'])
router.get('/per_tareas/tarea/:id', [PerTareasController, 'getPersonalFromTarea'])
router.get('/per_tareas/:id', [PerTareasController, 'show'])
// router.post('/per_tareas', [PerTareasController, 'create'])
router.put('/per_tareas/:id', [PerTareasController, 'update'])
router.delete('/per_tareas/:id', [PerTareasController, 'delete'])


//UNI_MED
// router.get('/uni_meds', [UniMedsController, 'index'])
router.get('/uni_meds', [UniMedsController, 'indexIds'])
router.get('/uni_meds/:id', [UniMedsController, 'show'])
router.post('/uni_meds', [UniMedsController, 'create'])
router.put('/uni_meds/:id', [UniMedsController, 'update'])
router.delete('/uni_meds/:id', [UniMedsController, 'delete'])

//PRESENACIONES
router.get('/presentacions', [PresentacionsController, 'index'])
router.get('/presentacions/:id', [PresentacionsController, 'show'])
router.post('/presentacions', [PresentacionsController, 'create'])
router.put('/presentacions/:id', [PresentacionsController, 'update'])
router.delete('/presentacions/:id', [PresentacionsController, 'delete'])

//MARCAS
router.get('/marcas', [MarcasController, 'index'])
router.get('/marcaId', [MarcasController, 'index']) //es igual a index pero para el componente ModalElegirId
router.get('/marcas/:id', [MarcasController, 'show'])
router.post('/marcas', [MarcasController, 'create'])
router.put('/marcas/:id', [MarcasController, 'update'])
router.delete('/marcas/:id', [MarcasController, 'delete'])

//TIPOS
router.get('/tipos', [TiposController, 'index'])
router.get('/tipoId', [TiposController, 'index']) //es igual a index pero para el componente ModalElegirId
router.get('/tipos/:id', [TiposController, 'show'])
router.post('/tipos', [TiposController, 'create'])
router.put('/tipos/:id', [TiposController, 'update'])
router.delete('/tipos/:id', [TiposController, 'delete'])

//RUBROS
router.get('/rubros', [RubrosController, 'index'])
router.get('/rubroId', [RubrosController, 'index']) //es igual a index pero para el componente ModalElegirId
router.get('/rubros/:id', [RubrosController, 'show'])
router.post('/rubros', [RubrosController, 'create'])
router.put('/rubros/:id', [RubrosController, 'update'])
router.delete('/rubros/:id', [RubrosController, 'delete'])

















