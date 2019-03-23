<template lang="pug">
  div       
    spinner
    div(v-cloak)  
    h3.heading.main-heading Latest articles
    transition(name='outIn')
      cardView(:news="news", v-if="$store.state.view.mode === 'card'")
      listView(:news="news", v-else-if="$store.state.view.mode === 'list'")
</template>

<script>
import listView from '@/components/listView'
import cardView from '@/components/cardView'
import {article} from '@/middleware/article'
import spinner from '@/components/spinner'

export default{
  name:'home',
  props: ['id'],
  mixins: [article],
  components: {
    spinner,
    listView,
    cardView
  },
  head () {
    return {
      title: 'cyberbitnews - latest tech, developer, infosec, linux news aggregator',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { 
          hid: 'description', 
          name: 'description', 
          content: 'cyberbitnews news aggregator. Stay upto date with the latest news and stories \
            in tech, software development, infosec, and linux.' }
      ]
    }
  },
	data() {
    return {    
      news: [],
      page: 1,
      previous: null,
      params: null,
      apiRoute: '/latest.php?page=',
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