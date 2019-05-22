<template lang="pug">
  .allsites
    h1.heading.main-heading All sites indexed so far ..
    .list-wrap
      table.all-table
        thead
          tr
            td
            td Site
            td Type
        tbody
          tr(v-for='(website, index) in sites', :key='index')
            td.pos {{ index + 1 }}
            td 
              router-link(:to="'/website/' + website.site") {{ website.site }}
            td.type {{ website.type }}
</template>
<script>
export default {
  name: 'websites',
  data() {
    return {
      sites: [
        {
          site: "freecodecamp",
          type: "developer"
        },
        {
          site: 'css-tricks',
          type: 'developer'
        },
        {
          site: "smashingmagazine",
          type: "developer"
        },
        {
          site: "dailyjs",
          type: "developer"
        },
        {
          site: "gitconnected",
          type: "developer"
        },
        {
           site: 'uxplanet',
           type: 'developer'
        },
        {
           site: 'codeburst',
           type: 'developer'
        },
        {
            site: 'techspot',
            type: 'tech'
        },
        {
          site: "omgubuntu",
          type: "linux"
        },
        {
          site: "thenextweb",
          type: "tech"
        },
        {
          site: "tecmint",
          type: "linux"
        },
        {
          site: "thehackernews",
          type: "infosec"
        },
        {
          site: "welivesecurity",
          type: "infosec"
        },
        {
          site: "rapid7",
          type: "infosec"
        },
        {
          site: "threatpost",
          type: "infosec"
        },
        {
          site: "securityledger",
          type: "infosec"
        },
        {
          site: "scmagazine",
          type: "infosec"
        },
        {
          site: "hackread",
          type: "infosec"
        },
        {
          site: "offensive-security",
          type: "infosec"
        },
        {
          site: "arstechnica",
          type: "tech"
        },
        {
          site: "linuxuprising",
          type: "linux"
        },
        {
          site: 'linuxhandbook',
          type: 'linux'
        }
      ]
    }
  }    
}
</script>
<style scoped>
table, tr, td {
  border: 1px solid #cdc8c8;
  border-collapse: collapse;
  text-align: left; 
}
thead > tr {
  font-size: 1.4rem;
}
td {
   padding: 15px 0 15px 10px;
}
.all-table {
  width: 100%;
}
.pos {
  text-align: center;
}
.type {
  text-transform: capitalize;
}
</style>
