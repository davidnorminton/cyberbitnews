<template lang="pug">
  include ../templates/header.pug
</template>

<script>
export default {
  name: 'mainHeader',
  data: function(){
    return {
      menuWidth: 300,
      query: '',
      developer: true,
      infosec: true,
      tech: true,
      linux: true,
      subMenu: {
          Developer: [
            {
              name: 'freecodecamp',
              link: 'freecodecamp.com'
            },
            {
              name: 'smashingmagazine',
              link: 'smashingmagazine.com'
            },
            {
              name: 'dailyjs',
              link: 'medium.com'
            },
            {
              name: 'gitconnected',
              link: 'gitconnected.com'
            },
            {
              name: '	uxplanet',
              link: '	uxplanet.org'
            }
          ],
          Tech: [
            {
              name: 'techspot',
              link: 'techspot.com'
            },
            {
              name: 'thenextweb',
              link: 'thenextweb.com'
            },
            {
              name: 'arstechnica',
              link: 'arstechnica.com'
            }
          ],
          Linux: [
            {
              name: 'tecmint',
              link: 'tecmint.com'
            },
            {
              name: 'linuxuprising',
              link: 'linuxuprising.com'
            },
            {
              name: 'omgubuntu',
              link: 'omgubuntu.com'
            }
          ],
          Infosec: [
            {
              name: 'thehackernews',
              link: 'thehackernews.com'
            },
            {
              name: 'welivesecurity',
              link: 'welivesecurity.com'
            },
            {
              name: 'rapid7',
              link: 'rapid7.com'
            },
            {
              name: 'threatpost',
              link: 'threatpost.com'
            },
            {
              name: '	securityledger',
              link: 'securityledger.org'
            },
            {
              name: 'scmagazine',
              link: 'scmagazine.com'
            },
            {
              name: 'hackread',
              link: 'hackread.com'
            },
            {
              name: 'offensive-security',
              link: 'offensive-security.com'
            }                       
          ]
      }
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

      if(!this.$store.state.view.menuVisible) {
        this.openMenu(); 
        this.$store.commit('view/openMenu');
      } else {
        this.closeMenu();
        this.$store.commit('view/closeMenu');    
      }  
    },
    subCatOpenSites(sub, event) {

       if(this[sub] === false) {
         event.target.classList.add('rotateArrow');
         this[sub] = true;
       } else {
         if(event.target.classList.contains('rotateArrow')) {
           event.target.classList.remove('rotateArrow')
         }
         this[sub] = false;
       }
    },
    openMenu() {
      this.menu.style.left = '0'
      this.body.style.left = '300px';
      this.body.style.width = 'calc(100% - 300px)';
      this.mainHeader.style.width = 'calc(100% - 300px)'
      this.content.style.maxWidth = '920px'
    },
    closeMenu() {
      this.menu.style.left = '-255px';
      this.body.style.left = '45px';
      this.body.style.width = 'calc(100% - 45px)';
      this.mainHeader.style.width = 'calc(100% - 45px)';
      if(this.$store.state.view.mode === 'card') {
          this.content.style.maxWidth = 'none';
      }    
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
  }
}
</script>

<style lang="scss">
@import "../scss/style.scss";
</style>
