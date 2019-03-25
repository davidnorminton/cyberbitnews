<template lang="pug">
    div
      section.about-section
        .about-block
          a(target='_blank', :href="link")
            h2 {{ site }}
          em.about-url {{ link }}
          .about-site
            p
              | {{ bio }}
              a(:href='aboutUrl')
                span
                  | READ MORE
      h3.main-heading(v-if="$store.state.view.mode === 'list'") Latest news from {{ site }}
      listView(:news="news", v-if="$store.state.view.mode === 'list'")
      cardView(:news="news", v-else="$store.state.view.mode === 'card'")
</template>  
<script>
import {article} from '@/middleware/article'
import listView from '@/components/listView'
import cardView from '@/components/cardView'

export default{
  name:'website',
  props: ['id'],
  components: {
    listView,
    cardView
  },
  mixins: [article],
  head () {
    return {
      title: 'cyberbitnews - latest news and stories from ' + this.$route.params.id,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { 
          hid: 'description', 
          name: 'description', 
          content: 'cyberbitnews news aggregator. Stay upto date with the latest news and stories' +
            ' from ' + this.$route.params.id }
      ]
    }
  },  
	data() {
    return {
      news: [],
      page: 1,
      params: null,
      site: '',
      link: '',
      bio: '',
      aboutUrl: '',
      apiRoute: "/website.php?site="
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
    this.scroll();
  },
  methods: {
    async getPage() {
      await this.$axios.$get(this.api + this.getApiRoute(this.$route.params.id))
        .then(response => {    
          let data = response[1];
          let data_length = data.length;

          for(let i = 0; i < data_length; i++) {
            this.$store.commit('news/addToNewsList', response[1][i]);
          }

          this.site = response[0][0].site;
          this.link = response[0][0].url;
          this.bio = response[0][0].about;
          this.aboutUrl = response[0][0].aboutUrl;
          this.bottom = false;
          const placeholder = document.getElementById('loading');
          
          if(placeholder) {
            placeholder.parentNode.removeChild(placeholder);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    scroll() {
      const img = document.getElementsByClassName("post-image"); 
      let numbImgs = img.length;
      // infinite load articles
      window.onscroll = () => {
        let scrolled = Math.ceil(document.documentElement.scrollTop + window.innerHeight);
        let offset = document.documentElement.offsetHeight;

        if (scrolled >= offset) {
          this.bottom = true;
          this.page++;
          this.getPage(this.page);
          return;
        }
      };
    }
  }
}
</script>

<style scoped></style>