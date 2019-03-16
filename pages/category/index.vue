<template lang="pug">
  div
    h3.heading.main-heading Categories
    ul.list-cats
      li(v-for="cat in subs")
        img.cat-image(:src="'https://static.cyberbitnews.com/img/' + cat.image") 
        nuxt-link(:to="'/category/' + cat.name.toLowerCase()") {{cat.name}}
</template>
<script>
export default {
  name: "category",
  data() {
      return {
          subs: [
              {
                name: "Developer",
                image: 'developer.jpg'
              },{
                name: "Infosec",
                image: 'infosec.jpg'
              },{
                name: "Tech",
                image: 'tech.jpg'
              },{
                name: "Linux",
                image: 'linux.jpg'}
          ]
      }
  }    
}
</script>
<style>
.list-cats {
    list-style: none;
}
.list-cats li {
    float: left;
    width: 46%;
    margin: 2%;
    border: 1px solid grey;
    box-sizing: border-box;
}
.list-cats li a {
    color: #222121;
    font-size: 1.2rem;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 10px 0;
} 
.cat-image {
    border-style: none;
    width: 100%;
    height: 225px;  
}
</style>
