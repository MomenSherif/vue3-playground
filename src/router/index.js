import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs/Jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "jobDetails" */ '../views/jobs/JobDetails.vue'),
    // props: true,
  },
  //Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all routes
  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
