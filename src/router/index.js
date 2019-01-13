import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import home from '@/components/home'
import category from '@/components/category'
import about from '@/components/about'
import notFound from '@/components/notFound';
import allsites from '@/components/allsites';
import search from '@/components/search';

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      props: {
        apiRoute: {
          type: String,
          default: '/api/latest.php?page='
        }
      },
      component: home
    },
    {
      path: '/category/:id',
      name: 'category',
      props: {
        apiRoute: {
          type: String,
          default: '/api/category.php?cat='
        }
      },
      component: category
    },
    {
      path: '/website/:id',
      name: 'about',
      props: {
        apiRoute: {
          type: String,
          default: '/api/website.php?site='
        }
      },
      component: about
    },
    {
       path: '/all-sites',
       component: allsites
    },
    {
       path: '/search/:id',
       name: 'search',
       props: {
         apiRoute: {
           type: String,
           default: '/api/search.php?q='
         }
       },
       component: search
    },
    {
      path: '/404',
      component: notFound
    }
  ]
})
