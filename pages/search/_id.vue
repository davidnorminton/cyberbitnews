<template lang="pug">
  div  
    h3.heading.main-heading Search results for "{{$route.params.id}}"
    listView(:news="news", v-if="$store.state.view.mode === 'list'")
    cardView(:news="news", v-else-if="$store.state.view.mode === 'card'")
    tableView(:news="news", v-else-if="$store.state.view.mode === 'table'")
</template>  
<script>
import listView from '@/components/listView'
import cardView from '@/components/cardView'
import tableView from '@/components/tableView'
import {article} from '@/middleware/article'

export default{
  name:'search',
  props: ['id'],
  mixins: [article],
  components: {
    listView,
    cardView,
    tableView
  },    
  data() {
    return {
      news: [],
      page: 1,
      previous: null,
      params: null,
      included: [],
      title: [],
      apiRoute: '/search.php?id='
    }
  },
  watch: {
    '$route'() { 
      this.$store.dispatch('news/resetState');
      this.params = this.$route.params.id;
      this.getPage();
    }  
  },
  mounted() {
    this.$store.dispatch('news/resetState');
    this.getPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.scroll();
  }
}
</script>

<style scoped>
</style>
