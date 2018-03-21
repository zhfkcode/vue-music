import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend.vue'
import Singer from 'components/singer/singer.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        redirect:'/recommend'
      },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
