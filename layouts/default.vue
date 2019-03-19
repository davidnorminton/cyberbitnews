<template lang="pug">
  #app
    TopHeader  
    .main-container
      .main-header
          miniSearch
          breadCrumbs(:key="$route.params.id")
          .settings    
            i.icon-th(v-show="$store.state.view.mode === 'card'", 
              style="color: grey", 
              title="Card view selected")
            i.icon-th.not-active(@click="$store.commit('view/selectCard')",
              v-show="$store.state.view.mode === 'list'",
              title="Switch to card view")
            i.icon-th-list(v-show="$store.state.view.mode === 'list'", 
              style="color: grey",
              title="List view selected")
            i.icon-th-list.not-active(@click="$store.commit('view/selectList')", 
              v-show="$store.state.view.mode === 'card'",
              title="Switch to list view")   
      .content
        transition(name='outIn')
          nuxt
</template>
<script>
import TopHeader from "@/components/header"
import breadCrumbs from "@/components/breadcrumbs"
import aSide from "@/components/aside"
import miniSearch from "@/components/miniSearchBar"

export default {
  components: {
    TopHeader,
    breadCrumbs,
    miniSearch,
    aSide
  }
}
</script>
