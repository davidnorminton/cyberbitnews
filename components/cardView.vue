<template lang="pug">
.list(:key='$route.params.id')
  article.card(v-for='(article, index) in this.$store.state.news.news', :key='index')
    .post
      .post-image-wrap
        .post-image(:style="{\
          background: 'url(' + article.image + '), url(https://static.cyberbitnews.com/img/placeholder.jpg) no-repeat', \
          backgroundSize: 'cover', \
          backgroundPosition: 'center center',\
          width: '100%'}", :data-src='article.image')
      .from-info
        nuxt-link.nav-link.posted-from(:to="'/website/' + article.domain") {{ article.domain }}    
      .post-text
        a.post-title(target='_blank', :href="article.url ")
          h2 {{ article.title }}
      .info
        .date
          i.icon-calendar-empty(aria="hidden")
          time.post-date {{ fmtDate(article.date, currentYear) }}
        .wpm  
          i.icon-clock(aria="hidden", v-if="article.wpm")
          span.wpm {{ wpm(article.wpm) }}
        nuxt-link.nav-link(:to="'/comments/' + article.id") 
          i.icon-chat(aria="hidden")  
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
    margin-bottom: 100px;
    float: left;
    margin: 10px;
    box-sizing: border-box;
    height: 335px;
    position: relative;
    width: 275px;
}

.card .post-image-wrap {
    width: 100%;
}
.card .post-text {
    width: 100%;
    float: right;
    box-sizing: border-box;
    padding: 0;
}
.card .info {
    clear: both;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
$info-color: #888080;
.from-info {
    position: relative;
    clear: both;
}
.card .post-date {
    margin-left: 8px;
    color: $info-color !important;
}
.card .icon-calendar-empty, .card .icon-clock, .card .wpm {
  color: $info-color !important;
}
.card .icon-chat {
    position: absolute;
    right: 10px;
    top: -3px;
    padding: 7px 7px 3px 3px;
    color: #aaa5a5;
    background: #e6e2e2;
    border-radius: 50%;
    transition: all linear .3s;
}
.card .icon-chat:hover {
  background: #aaa5a5;
  color: #e6e2e2;
}
.card .date, .card .wpm {
    text-align: center;
    display: inline-block;
}
.card .post-title {
    text-decoration: none;
    line-height: 19px!important;
    font-weight: 600!important;
    font-size: 0.7rem;
}
</style>
