        <footer>  
        &copy; <?= date('Y')?> cyberbitnews.com
        </footer>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
<script src="/scripts/article.js"></script>
<script src="/scripts/layout.js"></script>
<script>
const apiFeed = "<?= $Route->_getApiRoute() ?>";
const feed = <?= file_get_contents($url) ?>;     
if(feed.length > 2) {
    feed.map((data) => render(postTemplate(data)));
}
if(feed.length === 2) {
    feed[0].map((data) => render(aboutTemplate(data), aboutDiv));
    feed[1].map((data) => render(postTemplate(data)));
}    
</script>  
    </body>
</html>
