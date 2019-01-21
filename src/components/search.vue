<template lang="pug">
  div
    h3.heading.main-heading.main-title Search results for "{{ $route.params.id }}"
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
      params: null
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
    this.scroll();
  }
}
</script>

<style lang="scss" scoped>
</style>