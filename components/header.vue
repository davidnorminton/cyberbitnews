<template lang="pug">
  include ../templates/header.pug
</template>

<script>
export default {
  name: 'mainHeader',
  data: function(){
    return {
      menuVisible: 1,
      menuWidth: 300,
      query: '',
    }  
  },
  computed: {
    menu() {
      return document.getElementById("header");
    },
    body() {
      return document.querySelector(".main-container"); 
    },
    mainHeader() {
      return document.querySelector(".main-header");
    },
    content() {
      return document.querySelector(".content")
    }
  },
  methods: {
    moveHeader() {

      if(!this.menuVisible) {
        this.openMenu(); 
        this.menuVisible = 1;
      } else {
        this.closeMenu();   
        this.menuVisible = 0; 
    
      }  
    },
    openMenu() {
      this.menu.style.left = '0'
      this.body.style.left = '300px';
      this.body.style.width = 'calc(100% - 300px)';
      this.mainHeader.style.width = 'calc(100% - 300px)'
      this.content.style.width = '850px'
    },
    closeMenu() {
      this.menu.style.left = '-255px';
      this.body.style.left = '45px';
      this.body.style.width = 'calc(100% - 45px)';
      this.mainHeader.style.width = 'calc(100% - 45px)';
      this.content.style.width = 'none';
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
  },
  mounted() {
    if(!this.$route.params) {
      this.closeMenu();
      this.menuVisible = 0;
    }
  }
}
</script>

<style lang="scss">
@import "../scss/style.scss";
</style>
