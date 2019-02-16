<template lang="pug">
  div
    h3.heading.main-heading Landing page
    a(href='/latest') Latest news
</template>

<script>
import listView from '@/components/listView'
import cardView from '@/components/cardView'
import {article} from '@/middleware/article'

export default{
  name:'index',
  props: ['id'], 
	data() {
    return {    
    }
  },
  watch: { 
  },
  mounted() {
  }
}
</script>

<style lang="scss"> 
</style>
