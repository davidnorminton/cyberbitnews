<template lang="pug">
  #app
    include templates/header.pug
    .main-container
      .content
        transition(name='moveInUp')
          .page-content(:key="$route.params.id")
            router-view
      include templates/aside.pug  
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      menuVisible: 0,
      menuWidth: 300,
      query: ''
    }  
  },
  methods: {
    delay(toDelay, i) {
      setTimeout(function(){
        toDelay.classList.add("category-list-move-in");
      }, i * 180);
    },
    openMenu() {
      const menu = document.getElementById("side-menu");
      const items = document.getElementsByClassName("menu-item");
      
      if(!this.menuVisible) {
        menu.style.left = '0';
        let i = 0;
        let l = items.length;
        
        for(; i < l; i++) {
          this.delay(items[i], i);
        } 
      }
      this.menuVisible = 1;
    },
    closeMenu() {
      const menu = document.getElementById("side-menu");
      const items = document.getElementsByClassName("menu-item");

      if(this.menuVisible) {
        menu.style.left = '-' + this.menuWidth + 'px'; 
        [...items].map( x => x.classList.remove("category-list-move-in"));

      }
      this.menuVisible = 0;
    },
    processSearch() {
      let input = document.querySelector('.search-field').value;
      this.$router.push({ name: 'search', params: { id: input }});
    },
    mobileSearchWindow() {
      const searchBox = document.getElementById('search-mobile');
      searchBox.style.display = 'block';
    },
    mobileSearch() {
      let input = document.querySelector('.search-field-mobile').value;
      const searchBox = document.getElementById('search-mobile');
      searchBox.style.display = 'none';
      this.$router.push({ name: 'search', params: { id: input }});
      document.querySelector('.search-field').value = 0;
    }    
  }
}
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>
