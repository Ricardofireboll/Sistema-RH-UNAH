
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
 ,
  {
    path: '/user',
    component: () => import('layouts/PAALayout.vue'),
    children: [
      { path: '', component: () => import('pages/MenuPrincipal.vue') },
      { path: 'gestorEmpleado', component: () => import('pages/GestorEmpleado.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminHomeMenu.vue') },
      { path: 'registUser', component: () => import('pages/RegistroUsuario.vue') },
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
