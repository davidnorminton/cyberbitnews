const article = {
  currentYear() {
    return new Date().getFullYear();
  },
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
};

function postTemplate(data) {
    return `
      <article>
        <div class="post">
          <div class="post-text">
            <a target="_blank" href="${data.url}" title="Read this article" class="post-title">
              <h2>${data.title}</h2>
            </a>
            <div class="post-snippet">${article.snippet(data.title, data.snippet)} ...</div>
          <div>
            <a href="/website/${data.domain}" class="nav-link posted-from" title="All articles from ${data.domain}">${data.domain}</a>
          </div>
          <div>
            <i aria="hidden" class="icon-calendar"></i>
            <time class="post-date">${article.fmtDate(data.date)}</time>
            <i aria="hidden" class="icon-clock"></i>
            <span class="wpm">${article.wpm(data.wpm)}</span>
            <a href="/comments/${data.id}" class="nav-link">
              <i aria="hidden" class="icon-chat"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
    `;
}    
const newsList = document.getElementById('news');

function render(html) {
    let insert = document.createElement( 'div' )
    insert.innerHTML = html;  
    newsList.appendChild(insert);
}
feed.map((data) => render(postTemplate(data)));
