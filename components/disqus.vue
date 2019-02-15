<template>
  <div>
    <div id="disqus_thread"></div>
    <script>
    var disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    };

    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://cyberbitnews.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
    </script>
    <noscript>
        Please enable JavaScript to view the 
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
    </noscript>
  </div>                              
</template>