<template lang="pug">
  div
    div(v-if='news.length === 0')
      h1 This is with no category selected
    div(v-else)  
      h3.heading.main-heading Latest articles - "{{ title }}"
      include ../templates/list.pug
</template>  
<script>
import {article} from '@/mixins/article'

export default{
  name:'listView',
  props: ['id', 'apiRoute'],
  mixins: [article],
  template: '.listView',
	data() {
    return {
      news: [],
      page: 1,
      api: this.apiRoute.default,
      previous: null,
      params: null,
      title: ''
    }
  },
  watch: {
    '$route'() { 
      this.params = this.$route.params.id;
      this.getPage();
      console.log(this.$route.params)
    }  
  },
  mounted() {
    this.getPage();
    this.scroll();
    if(this.title.length < 1) this.title = this.$route.params.id;
  }
}
</script>

<style lang="scss" scoped>
</style>