<template lang="pug">
table(:key='$route.params.id')
  tr.row(v-for='(article, index) in this.$store.state.news.news', :key='index')
    td
      nuxt-link(:to="'/website/' + article.domain") {{ article.domain }}    
    td
      a(target='_blank', :href="article.url ")
        h2 {{ article.title }}
    td
      time {{ fmtDate(article.date, currentYear) }}
    td    
      span {{ wpm(article.wpm) }}
    td    
      nuxt-link.nav-link(:to="'/comments/' + article.id") 
        i.icon-chat(aria="hidden") 
</template>
<script>

export default {
  name: "tableView",
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
$primary-table-color: #726f6f;
table, tr, td {
  border: 1px solid #e1dcdc;
  border-collapse: collapse;
}
table {
  width: 100%;
}
td {
  padding: 5px;
}
tr a, tr h2, tr time, tr span {
  text-decoration: none;
  font-size: 12px;
  color: $primary-table-color;
}
</style>
