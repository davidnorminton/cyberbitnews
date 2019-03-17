
export const article = {
  data() {
    return {
      domain: 'https://test.cyberbitnews.com',
      api: 'https://api.cyberbitnews.com'
    }
  },
  methods: {
    enter() {
      this.title = this.$route.params.id;
    },
    getApiRoute(category) {
    
        if(category){
          return `${this.apiRoute}${category}&page=${this.page}`;
        } else {
          return `${this.apiRoute}${this.page}`;
        }
    },
    async getPage() {
      await this.$axios.$get(this.api + this.getApiRoute(this.$route.params.id))
        .then(response => {
          let l = [...response].length;
          for (let i = 0; i < l; i++) {
            this.news.push(response[i]);
          }
          // when the user reaches the bottom of the page the scrolled function
          // is used to request the next pages data.
          // this.bottom is used to prevent multiple requests being made
          // caused by the user scrolling too quickly 
          this.bottom = false;
          // remove the page loading notification
          const placeholder = document.getElementById('loading');
          // check if the news array has changed

          if(placeholder) {
            placeholder.parentNode.removeChild(placeholder);
          }
          
        })
        .catch(error => {
          console.log(error);
        });
    },
    scroll() {

      // infinite load articles
      window.onscroll = () => {
        let scrolled = Math.ceil(document.documentElement.scrollTop + window.innerHeight);
        let offset = document.documentElement.offsetHeight;

        if (scrolled >= offset) {
          this.bottom = true;
          this.page++;
          this.getPage(this.page);
          return;
        }
      };
    }
  }
}