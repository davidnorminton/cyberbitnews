<template lang="pug">
  div  
    h3.main-heading All articles in "{{ $route.params.id }}"
    div(v-if='included.length === 0')
      h1 Loading ...
    .category-header(v-if="title !== null")
      h3.intro
      | A curated list provided by the following sites ... 
      ul.sites-included
        li(v-for='(site, index) in included', :key="index") 
          nuxt-link(:to="'/website/' + site") {{ site }}
    listView(:news="news", v-if="$store.state.view.mode === 'list'")
    cardView(:news="news", v-else)
</template>  
<script>
import listView from '@/components/listView'
import cardView from '@/components/cardView'
import {article} from '@/middleware/article'

export default{
  name:'category',
  props: ['id'],
  mixins: [article],
  components: {
    listView,
    cardView
  },    
  head () {
    return {
      title: 'cyberbitnews - latest ' + this.$route.params.id + '.News aggregator',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { 
          hid: 'description', 
          name: 'description', 
          content: 'cyberbitnews news aggregator. Stay upto date with the latest news and stories' +
            ' for ' + this.$route.params.id }
      ]
    }
  },
  data() {
    return {
      news: [],
      page: 1,
      previous: null,
      params: null,
      included: [],
      title: null,
      apiRoute: '/category.php?cat=',
    }
  },
  watch: {
    '$route'() { 
      this.params = this.$route.params.id;
      this.getDescription();
      this.getPage();
    }  
  },
  methods: {

    async getDescription() {
        await this.$axios.$get(this.domain + "/static/data/categories.json")
        .then((response) => {

          if([...response].length === 0) {
            this.$router.push("/404")
          }

          let cat = this.$route.params.id;
          this.title = response[0][cat].title;
          this.included = response[0][cat].included;

        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getDescription();
      this.getPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.scroll();
    });  
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: calc(100% - 20px);
  height: auto;
  margin: 50px 0 20px 0;
  border: 4px solid #2f3a40;
}
.parts {
  display:inline-block;
  padding: 50px 0 20px 0;
  font-size: 4rem;
  font-family: serif;
  font-weight: bold;
  box-sizing: border-box;
}
.part1 {
  background: white;
  color: #2f3a40;
  width: 20%;
  text-align: right;
}
.part2 {
  background: #2f3a40;
  color: white;
  width: 80%;
  text-align: left;
}
.sites-included {
  margin: 20 0;
  padding: 0;
  list-style: none;
}
.sites-included li {
  display: inline-block;
  background: #73777c;
  margin: 5px 10px 5px 0;
  border-radius: 4px;
}
.sites-included li a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: .8rem;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}
h3.inc {
  color: #73777c;
  font-weight: normal;
}
</style>