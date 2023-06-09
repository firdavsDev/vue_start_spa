import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'

const routes = [
  {
    path: '/pages',
    name: 'pages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/PagesList.vue'),
    props: true, //it will pass the props to the component
    children: [
      {
        path: 'create',
        name: 'create',
        component: () => import('../components/PageCreate.vue'),
        props: true
      },
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
