
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/user',
    component: () => import('layouts/PAALayout.vue'),
    children: [
      { path: '', component: () => import('pages/MenuPrincipal.vue') },
      { path: '/PAA', component: () => import('pages/PAA.vue') },
      { path: '/perfilUser', component: () => import('pages/PerfilUsuario.vue') },
      { path: '/PAA1', component: () => import('pages/PAA1.vue') },
      { path: '/BusquedaEmpleado', component: () => import('pages/BusquedaEmpleado.vue') },
      { path: '/GestorEmpleado', component: () => import('pages/GestorEmpleado.vue') },
      { path: '/Asistencia', component: () => import('pages/AsistenciaEmpleados.vue') },
      { path: '/Monitoreo', component: () => import('pages/MonitoreoDocentes.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminHomeMenu.vue') },
      { path: '/registUser', component: () => import('pages/RegistroUsuario.vue') },
      { path: '/perfilAdmin', component: () => import('pages/PerfilUsuario.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
