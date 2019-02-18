<template lang="pug">
  div
    .top-banner
      .container.padding-top-140
        .top-banner-text 
          | Stay upto date with the latest news and stories from
          | some of the most popular technology, infosec, developer &
          | linux blogs
    .goto
      .container
        h2 View the latest articles
        nuxt-link.button.latest-link(to="/latest") all
        nuxt-link.button.category-link(to="/category/developer") developer
        nuxt-link.button.category-link(to="/category/infosec") infosec   
        nuxt-link.button.category-link(to="/category/linux") linux   
        nuxt-link.button.category-link(to="/category/tech") tech   
   
</template>

<script>
import listView from '@/components/listView'
import cardView from '@/components/cardView'

export default{
  name:'index',
  props: ['id'],
  head () {
    return {
      title: 'cyberbitnews - latest tech, developer, infosec, linux news aggregator',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { 
          hid: 'description', 
          name: 'description', 
          content: 'cyberbitnews news aggregator. Stay upto date with the latest news and stories \
            in tech, software development, infosec, and linux.' }
      ]
    }
  },
	data() {
    return {    
    }
  },
  watch: { 
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.top-banner {
  width: 100%;
  height: 300px;
}
header {
  box-shadow: none;
}
.top-banner-text {
    color: #334d5d;
    font-size: 3rem;
    width: 80%;
    margin: 0 auto;
    line-height: 3.6rem;
    font-family: serif;
    font-style: italic;
}
.padding-top-140 {
  padding-top: 140px;
}
.goto {
  text-align: center;
  position: relative;
  margin-top: 140px;
  padding: 60px 0;

  h2 {
    font-weight: normal;
    font-size: 2.6rem;
    color: #2f3a40;
    background: white;
    z-index: 1;
    display: block;
    width: 38%;
    margin: 0 auto;
    margin-bottom: 80px;
  }
  h2::before {
    content: '';
    position: absolute;
    background: #186491;
    width: 100%;
    height: 2px;
    left: 0px;
    top: 1.5rem;
    z-index: -1;
  }
}
.button {
  border-radius: 25rem;
  padding: 10px 20px;
  margin: 20px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
}
.latest-link {
    background: #2f3a40;
    color: white;
}
.category-link {
    background: #ffa500;
    color: #2f3a40;
    font-weight: bold;
}
</style>
