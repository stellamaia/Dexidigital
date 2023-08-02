import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import FormView from '../views/FormView.vue'
import PostsView from '../views/PostsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/formulario',
    name: 'form',
    component: FormView
  },
  {
    path: '/posts/:title',
    name: 'posts',
    component: PostsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  metaInfo: {
    // Meta Tags globais para todas as páginas
    title: 'DexiDigital - Qualidade e agilidade em aplicações seguras',
    meta: [
      { name: 'Equipes dinâmicas para projeto estratégicos, impulsionando o crecimento consistente da sua empresa no ritmo que você precisa.', 
        content: 'Equipes dinâmicas para projeto estratégicos, impulsionando o crecimento consistente da sua empresa no ritmo que você precisa.' },
      // Outras Meta Tags globais
    ]
  }
})

export default router
