const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'personagens', component: () => import('pages/Personagens.vue') },
      { path: 'filmes', component: () => import('pages/Movies.vue') },
      { path: 'planetas', component: () => import('pages/Planetas.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
