<template lang="pug">
  div
    include ../templates/breadcrumbs.pug
    include ../templates/about.pug
</template>  
<script>
import {article} from '@/mixins/article'

export default{
  name:'about',
  props: ['id', 'apiRoute'],
  mixins: [article],
	data() {
    return {
      news: [],
      api: this.apiRoute.default,
      params: null,
      site: '',
      link: '',
      bio: ''
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
  },
  methods: {
    getApiRoute(category) {
      if(category){
          console.log(`${this.api}${category}`);
          return `${this.api}${category}`;
      }    
    },
    getPage() {

      if(!this.params) this.params = this.$route.params.id;
      if(this.params !== this.previous) {
        this.previous = this.params;
        this.news.length = 0;
      } 
      this.axios
        .get( this.getApiRoute(this.params), {
          
            headers: {
              "Access-Control-Allow-Origin": "*",
              useCredentails: false 
            }
          }    
        )
        .then(response => {

          let data = response.data[1];
          let data_length = data.length;

          for(let i = 0; i < data_length; i++) {
              this.news.push(response.data[1][i]);
              console.log(i + ' ' + response.data[1][i]);
          }

          this.site = response.data[0][0].site;
          this.link = response.data[0][0].url;
          this.bio = response.data[0][0].about;
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
    scroll () { return }
  }
}
</script>

<style lang="scss" scoped></style>