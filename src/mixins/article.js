import router from "../router";

export const article = {
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
    getApiRoute(category) {
      if(category){
        return `${this.api}${category}&page=${this.page}`;
      } else {
        return `${this.api}${this.page}`;
      }
    },
    getPage() {
      /*
       * Handle the page state - check the current route isn't
       * equal to the value in this.previous
       */
      if(!this.params) this.params = this.$route.params.id;
      if(this.params !== this.previous) {
        this.previous = this.params;
        this.news.length = 0;
      } 

      this.axios
        .get( this.getApiRoute(this.params), {
            headers: {
              "Access-Control-Allow-Origin": "*",
              useCredentails: false 
            }
          }    
        )
        .then(response => {
          let l = response.data.length;
  
          for (let i = 0; i < l; i++) {
            this.news.push(response.data[i]);
          }
          // when the user reaches the bottom of the page the scrolled function
          // is used to request the next pages data.
          // this.bottom is used to prevent multiple requests being made
          // caused by the user scrolling too quickly 
          this.bottom = false;
          // remove the page loading notification
          const placeholder = document.getElementById('loading');
          
          if(placeholder) {
            placeholder.parentNode.removeChild(placeholder);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    scroll() {
      const img = document.getElementsByClassName("post-image"); 
      let numbImgs = img.length;
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