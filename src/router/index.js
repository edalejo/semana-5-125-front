import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     public: true
  //   },
  // },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    meta: {
      public: true
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      public: true
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    meta: {
      auth: true,
      administrador:true,
      vendedor:true
    },
    children: [
        { 
        path: '',
        name: "presentation",
        component: () => import(/* webpackChunkName: "presentation" */ '../views/Presentation.vue'), 
        },
      // { path: '', component: Presentation },

      {
        path: 'categorias',
        name: 'Categorias',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
        meta: {
          auth: true,
          administrador:true,
          vendedor:true
        },
      },
      {
        path: 'articulos',
        name: 'Articulos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
        meta: {
          auth: true,
          administrador:true,
          vendedor:true
        },
      },
      {
        path: 'usuarios',
        name: 'Usuarios',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
        meta: {
          auth: true,
          administrador:true
        },
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to,from,next)=>{
  if (to.matched.some(record=>record.meta.public)){
    console.log('Public');
    next();

  }else if(to.matched.some(record=>record.meta.auth)){
    store.dispatch("autoLogin");
    console.log("user-router-auth", store.state.user);
    if(store.state.user){
      next();
      console.log('Auth');
    }
    else{
      console.log('No Auth');
      next({name: 'Login'})
    }
  }else{
    console.log('No se Auth');
    next();
  }
});

export default router
