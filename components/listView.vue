<template lang="pug">
.list(:key='$route.params.id')
  article(v-for='(article, index) in this.$store.state.news.news', :key='index')
    .post
      .post-image-wrap
        .post-image(:style="{\
          background: 'url(' + article.image + '), url(https://static.cyberbitnews.com/img/placeholder.jpg) no-repeat', \
          backgroundSize: 'cover', \
          backgroundPosition: 'center center',\
          width: '100%'}", :data-src='article.image')
      .post-text
        a.post-title(target='_blank', :href="article.url" , title="Read this article")
          h2 {{ article.title }}
        .post-snippet {{ snippet(article.title, article.snippet) }} ...
        div
          nuxt-link.nav-link.posted-from(:to="'/website/' + article.domain", 
            :title="'All articles from ' + article.domain") {{ article.domain }}
        div
          i.icon-calendar(aria="hidden")
          time.post-date {{ fmtDate(article.date, currentYear) }}
          i.icon-clock(aria="hidden", v-if="article.wpm")
          span.wpm {{ wpm(article.wpm) }}
          nuxt-link.nav-link(:to="'/comments/' + article.id") 
            i.icon-chat(aria="hidden")
</template>
<script>

export default {
  name: "listView",
  props: {
      'news': {
          type: Array,
          required: true
      }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },  
  methods: {
    snippet(title, intro) {
      if (title.length > 55) return intro.substring(0, 170).replace('...', '');
      return intro.substring(0, 250).replace('...','');
    },
    wpm(count) {
      if (count == 0) return;
      let split = count.split(".");
      let mins = split[0];
      let secs = 60 * (split[1] / 100);
      if (mins == 0 && secs < 35) return;
      if (secs >= 35) mins++;
  
      return mins + " Min " + "read";
    },
    fmtDate(a_date, current) {
      const months = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      let date = a_date.split('-');

      let month = months[parseInt(date[1])];
      let day = parseInt(date[2]);
      let year = parseInt(date[0]) !== current ? ' ,' + parseInt(date[0]): '';

      return `${month} ${day} ${year}`;
    },
  } 
}
</script>