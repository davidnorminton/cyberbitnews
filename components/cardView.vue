<template lang="pug">
.list(:key='$route.params.id')
  article.card(v-for='(article, index) in news', :key='index')
    .post
      .post-image-wrap
        .post-image(:style="{\
          background: 'url(' + article.image + '), url(https:/static.cyberbitnews.com/img/placeholder.jpg) no-repeat', \
          backgroundSize: 'cover', \
          backgroundPosition: 'center center',\
          width: '100%'}", :data-src='article.image')
      .from-info
        nuxt-link.nav-link.posted-from(:to="'/website/' + article.domain") {{ article.domain }}
        nuxt-link.nav-link(:to="'/comments/' + article.id") 
          i.icon-chat(aria="hidden")    
      .post-text
        a.post-title(target='_blank', :href="article.url ")
          h2 {{ article.title }}
        .post-snippet {{ snippet(article.title, article.snippet) }} ...
      .info
        .date
          i.icon-calendar(aria="hidden")
          time.post-date {{ fmtDate(article.date, currentYear) }}
        .wpm  
          i.icon-clock(aria="hidden", v-if="article.wpm")
          span.wpm {{ wpm(article.wpm) }}
</template>
<script>

export default {
  name: "cardView",
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
<style lang="scss" scoped>
.card{
    margin-bottom: 50px;
    float: left;
    margin: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 6px 1px #38383e;
    height: 440px;
    position: relative;
}
@media only screen and (max-width: 679px) {
    .card {
        width: calc(100% - 20px);
    }
}
@media only screen and (min-width: 680px) {
    .card {
        width: calc(50% - 20px);
    }
}
@media only screen and (min-width: 1020px){
    .card {
        width: calc(33.33% - 20px);
    }
}

.card .post-image-wrap {
    width: 100%;
}
.card .post-text {
    width: 100%;
    float: right;
    box-sizing: border-box;
    padding: 8px 10px;
}
.card .info {
    clear: both;
    background: #e3e2e2;
    height: 38px;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0 0 10px;
    box-sizing: border-box;
}
.from-info {
    line-height: 30px;
    background: #eeeff0;
    padding: 5px 0 5px 15px;
    width: calc(100% - 15px);
    position: relative;
    clear: both;
}
.card .post-date {
    margin-left: 8px;
}
.card .icon-chat {
    position: absolute;
    right: 10px;
    top: 0;
    padding: 5px;
    color: #383b3f;
}
.card .date, .card .wpm {
    width: 50%;
    text-align: center;
    display: inline-block;
}
.card .posted-from {
    color: #383b3f;
}
.card .post-title {
    text-decoration: none;
    line-height: 19px!important;
    font-weight: 600!important;
    font-size: 0.7rem;
}
</style>
