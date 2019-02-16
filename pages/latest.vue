<template lang="pug">
  div
    h3.heading.main-heading Latest articles
    transition(name='outIn')
      cardView(:news="news", v-if="$store.state.view.mode === 'card'")
      listView(:news="news", v-else)
</template>

<script>
import listView from '@/components/listView'
import cardView from '@/components/cardView'
import {article} from '@/middleware/article'

export default{
  name:'home',
  props: ['id'],
  mixins: [article],
  components: {
    listView,
    cardView
  },  
	data() {
    return {    
      news: [],
      page: 1,
      previous: null,
      params: null,
      apiRoute: '/latest.php?page='
    }
  },
  watch: {
    '$route'() { 
      this.params = this.$route.params.id;
      this.getPage();
    }  
  },
  mounted() {
    this.getPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.scroll();
  }
}
</script>

<style lang="scss"> 
</style>
