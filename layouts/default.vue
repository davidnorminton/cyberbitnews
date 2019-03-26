<template lang="pug">
  #app
    TopHeader  
    .main-container
      .main-header
          miniSearch
          breadCrumbs(:key="$route.params.id")
          .settings    
            i.icon-th(v-show="$store.state.view.mode === 'card'", 
              style="color: #cdc8c8", 
              title="Card view selected")
            i.icon-th.not-active(@click="$store.commit('view/selectState', 'card')",
              v-show="$store.state.view.mode !== 'card'",
              title="Switch to card view")


            i.icon-th-list-1(v-show="$store.state.view.mode === 'list'", 
              style="color: #cdc8c8",
              title="List view selected")
            i.icon-th-list-1.not-active(@click="$store.commit('view/selectState', 'list')", 
              v-show="$store.state.view.mode !== 'list'",
              title="Switch to list view")

            i.icon-th-list(v-show="$store.state.view.mode === 'table'", 
              style="color: #cdc8c8",
              title="Table view selected")
            i.icon-th-list.not-active(@click="$store.commit('view/selectState', 'table')", 
              v-show="$store.state.view.mode !== 'table'",
              title="Switch to table view")                 
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
<style lang="scss">
.icon-th-list {
  font-size: 15px;
  position: relative;
  bottom: 2px;
}
</style>
