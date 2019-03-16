<template lang="pug">
.breadcrumbs
  span(v-for='(route, index) in routes', :key='index')  
    router-link.crumb-link(v-if='index < routes.length -1', :to='route.path') {{ route.name }}
    span.crumb-non-link(v-if='index == routes.length -1') {{ route.name }}
    i.seperator(v-if="index < routes.length - 1") / 
</template>
<script>
export default {
  data() {
    return {
      routes: [{name:'home', path: '/'}]
    }  
  },
  methods: {
    splitRoutes() {
      const routes = this.$route.path
                      .split("/")
                      .filter((x) => x.length > 0);
      
      for(let i = 0, l = routes.length; i < l; i++) {
        if(i === 0) {
          this.routes.push({name: routes[i], path: '/' + routes[i]});
        } else {
          this.routes.push({name: routes[i], path: '/' + routes[0] + '/' + routes[i]})
        }
      }
    }
  },
  mounted() {
    this.splitRoutes();
  }
}
</script>