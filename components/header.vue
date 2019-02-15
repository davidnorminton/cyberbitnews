<template lang="pug">
  #app
    include ../templates/header.pug
</template>

<script>
export default {
  name: 'header',
  data: function(){
    return {
      menuVisible: 0,
      menuWidth: 300,
      query: ''
    }  
  },
  methods: {
    openMenu() {
      const menu = document.getElementById("side-menu");      
      if(!this.menuVisible) menu.style.left = '0';
      this.menuVisible = 1;
    },
    closeMenu() {
      const menu = document.getElementById("side-menu");
      if(this.menuVisible) menu.style.left = `-${this.menuWidth}px`;
      this.menuVisible = 0;
    },
    processSearch() {
      let input = document.querySelector('.search-field').value;
      this.$router.push({ name: 'search-id', params: { id: input }});
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
@import "../scss/style.scss";
</style>
