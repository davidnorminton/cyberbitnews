<?php
 include $root . "/app/head.php";
 include $root . "/app/side-bar.php";
?> 
     <div class="main-container">
        <?php include $root . "/app/header.php"; ?>
        <div class="content">
            <div id="news"></div> 
        </div>
    </div>
<script>
var feed = <?= file_get_contents($url) ?>;     
</script>
<script src="/scripts/article.js">
</script>  
 <?php
 include $root . "/app/footer.php";