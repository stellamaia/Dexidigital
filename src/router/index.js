import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import FormView from '../views/FormView.vue'
import PostsView from '../views/PostsView.vue'
import CreatePost from '../views/CreatePost.vue'
import LoginView from '../views/LoginView.vue'
// import SignView from '../views/SignView.vue'
import EditPost from '../views/EditPost.vue'
import PostEditPage from '../views/PostEditPage.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

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
    path: '/fale-conosco',
    name: 'form',
    component: FormView
  },
  {
    path: '/posts/:title',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/criar-post/',
    name: 'create-Post',
    component: CreatePost
  },
  {
    path: '/entrar/',
    name: 'login-view',
    component: LoginView
  },
  // {
  //   path: '/sign-view/',
  //   name: 'sign-view',
  //   component: SignView
  // },
  {
    path: '/editar-post',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/pagina-de-edicao/:postId',
    name: 'post-edit-page',
    component: PostEditPage
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  
})

export default router
