<template lang="pug">
  .comments
    h1.heading {{ title }}
    h2 from  
      nuxt-link.posted-from(:to="'/website/' + domain") {{ domain }}
    article(v-if="id !== null")
      .post
        .post-image-wrap
          img.post-image(:src='image', :data-src='image')
        .post-text
          .post-snippet {{ snippet() }} ...
        .info
            i.icon-calendar(aria="hidden")
            time.post-date {{ fmtDate() }}
            i.icon-clock(aria="hidden", v-if="wpm")
            span.wpm {{ wpm() }}
    disqus(:id="id")
                                    
</template>
<script>
import disqus from '@/components/disqus'

export default {
  name: 'comments',
  components: {
    disqus
  },
  data() {
    return {
        image: null,
        url: null,
        title: null,
        asnippet: null,
        domain: null,
        awpm: null,
        id: null
      }
  },  
  watch: {
    '$route'() { 
      this.getPage();
    }  
  },
  methods: {
    async getPage() {
      await this.$axios.$get('https://api.cyberbitnews.com/single.php?id=' + this.$route.params.id)
        .then(response => {
          const data = response[0];
          this.title = data.title;
          this.image = data.image;
          this.url = data.url;
          this.asnippet = data.snippet;
          this.domain = data.domain;
          this.awpm = data.wpm;
          this.id = data.id;
          this.date = data.date;
          // when the user reaches the bottom of the page the scrolled function
          // is used to request the next pages data.
          // this.bottom is used to prevent multiple requests being made
          // caused by the user scrolling too quickly 
          this.bottom = false;
          // remove the page loading notification
          const placeholder = document.getElementById('loading');
          // check if the news array has changed
          if(placeholder) {
            placeholder.parentNode.removeChild(placeholder);
          }
          
        })
        .catch(error => {
          console.log(error);
        });
    },
    snippet() {
      if (this.title.length > 55) return this.title.substring(0, 170).replace('...', '');
      return this.asnippet.substring(0, 250).replace('...','');
    },
    wpm() {
      if (this.awpm == 0) return;
      let split = this.awpm.split(".");
      let mins = split[0];
      let secs = 60 * (split[1] / 100);
      if (mins == 0 && secs < 35) return;
      if (secs >= 35) mins++;
  
      return mins + " Min " + "read";
    },
    fmtDate() {
      
      const current = new Date().getFullYear();
      const months = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      let date = this.date.split('-');

      let month = months[parseInt(date[1])];
      let day = parseInt(date[2]);
      let year = parseInt(date[0]) !== current ? ' ,' + parseInt(date[0]): '';

      return `${month} ${day} ${year}`;
    } 
  },
  mounted() { 
    this.$nextTick(() => this.getPage());
  }
}
</script>
<style scoped>
.comments {
    margin-top: 40px;
}
.comments h1.heading {
    font-size: 1.5rem;
    margin: 0;
    border: 0;
}
.comments .post {
    width: 100%;
    max-width: none;
}
.comments .post-image-wrap {
    width: 40%;
}
.comments .post-text {
    width: 60%;
}
.comments .post-image {
    width: 100%;
    height: auto;
}
.content .comments .post-snippet {
    line-height: 25px;
    font-size: 1.1rem;
    padding: 0 20px;
}
.full-width-content .comments .post-snippet {
    line-height: 34px;
    font-size: 1.3rem;
    padding: 0 20px;
}
h2 {
    color: #4f4d4d;
    font-size: 1.3rem;
    margin-top: 0;
    font-weight: normal;
}
h2.posted-from {
    color: #186491;
}
.comments .info {
    margin: 20px;
    display: inline-block;
}
</style>
