export const postData = {
    computed: {
        currentYear() {
          return new Date().getFullYear();
        }
      },  
      methods: {
        snippet(title, intro) {
          console.log("snippet " + title + ' ' + intro)  
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
      } 
}