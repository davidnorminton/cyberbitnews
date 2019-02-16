<template lang="pug">
  #app
    TopHeader
    .index-container(v-if="$route.path === '/'") 
      transition(name='outIn')
        div(:key="$route.params.id")
          breadCrumbs
          nuxt      
    .main-container(v-if="$route.path !== '/'")
      .content(v-if="$store.state.view.mode === 'list'")
        transition(name='outIn')
          div(:key="$route.params.id")
            breadCrumbs
            nuxt
      .full-width-content(v-else="$store.state.view.mode === 'card'")
        transition(name='outIn')
          div(:key="$route.params.id")
            breadCrumbs
            nuxt
      aSide(v-if="$store.state.view.mode === 'list'")
</template>
<script>
import TopHeader from "@/components/header"
import breadCrumbs from "@/components/breadcrumbs"
import aSide from "@/components/aside"

export default {
  components: {
    TopHeader,
    breadCrumbs,
    aSide
  }
}
</script>
<style>
</style>
