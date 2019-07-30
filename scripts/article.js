const currentYear = () => {
    return new Date().getFullYear();
};
  
const snippet = (title, intro) => {
    if (title.length > 55) {
        return intro.substring(0, 170).replace('...', '');
    }    
    return intro.substring(0, 250).replace('...','');
};
  
const wpm = (count) => {
    if (count == 0) return '';
    let split = count.split(".");
    let mins = split[0];
    let secs = 60 * (split[1] / 100);
    if (mins == 0 && secs < 35) return;
    if (secs >= 35) mins++;
  
    return mins + " Min " + "read";
};
  
const months = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
const fmtDate = (a_date, current) => {

    let date = a_date.split('-');
    let month = months[parseInt(date[1])];
    let day = parseInt(date[2]);
    let year = parseInt(date[0]) !== current ? ' ,' + parseInt(date[0]): '';
    return `${month} ${day} ${year}`;

};

var page = 1;
var isActive = false;

async function getPage(url, page) {
    if(url.indexOf('?') > -1) {
        var link = url + '&page=' + page;    
    } else {
        var link = url + '?page=' + page;
    }
    
    await fetch(link)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            addToFeed(json);
        }); 
        
    isActive = false;       
}

const addToFeed = (feed) => {
    feed.map((data) => render(postTemplate(data)));
}


// infinite load articles
window.onscroll = () => {
    let scrolled = Math.ceil(document.documentElement.scrollTop + window.innerHeight);
    let offset = document.documentElement.offsetHeight;

    if (scrolled >= offset) {
        if(!isActive){
            isActive = true;
            page++;
            getPage(apiFeed, page);
        }    

    }

};


function postTemplate(data) {
    return `
        <article>
            <div class="post">
                <div class="post-text">
                    <a target="_blank" 
                       href="${data.url}" 
                       title="Read this article" class="post-title">
                         <h2>${data.title}</h2>
                    </a>
                    <div class="post-snippet">
                        ${snippet(data.title, data.snippet)} ...
                    </div>
                <div>
                    <a href="/website/${data.domain}" 
                       class="nav-link posted-from" 
                       title="All articles from ${data.domain}">
                       ${data.domain}
                    </a>
                </div>
                <div>
                    <i aria="hidden" class="icon-calendar"></i>
                    <time class="post-date">
                        ${fmtDate(data.date)}
                    </time>
                    <i aria="hidden" class="icon-clock"></i>
                    <span class="wpm">${wpm(data.wpm)}</span>
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

function render(html, node = newsList) {
    let insert = document.createElement( 'div' )
    insert.innerHTML = html;  
    node.appendChild(insert);
}

function aboutTemplate(data) {
    return `
            <section class="about-section">
                <div class="about-block">
                    <a target="_blank" href="${data.url}">
                        <h2>${data.site}</h2>
                    </a>
                    <em class="about-url">${data.url}</em>
                    <div class="about-site">
                        <p>${data.about}<a href="${data.url}"><span>READ MORE</span></a>
                        </p>
                    </div>
                </div>
            </section>
     `;
}
const aboutDiv = document.getElementById('about');