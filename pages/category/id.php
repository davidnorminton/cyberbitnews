<?php
 include $root . "/app/head.php";
 include $root . "/app/side-bar.php";
?> 
     <div class="main-container">
        <?php include $root . "/app/header.php"; ?>
        <div class="content">
            <h3 class="main-heading">All articles in "<?= $Route->_getSplitUrl()[1]?>"</h3>
            <div id="news"></div> 
        </div>
    </div>
<script>
const apiFeed = "<?= $Route->_getApiRoute() ?>";
const feed = <?= file_get_contents($url) ?>;     
</script>
<script src="/scripts/article.js"></script>
<script>
feed.map((data) => render(postTemplate(data)));
</script>  
 <?php
 include $root . "/app/footer.php";
