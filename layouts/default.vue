<template lang="pug">
  #app
    TopHeader  
    .main-container
      .main-header
          miniSearch
          breadCrumbs(:key="$route.params.id")
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
