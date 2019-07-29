<?php
 include $root . "/app/head.php";
 include $root . "/app/side-bar.php";
?> 
     <div class="main-container">
        <?php include $root . "/app/header.php"; ?>
        <div class="content">
        <h3 class="heading main-heading">Categories</h3>
            <ul class="list-cats">
                <li>
                    <img src="https://static.cyberbitnews.com/img/developer.jpg" class="cat-image">
                    <a href="/category/developer" class="">Developer</a>
                </li>
                <li>
                    <img src="https://static.cyberbitnews.com/img/infosec.jpg" class="cat-image">
                    <a href="/category/infosec" class="">Infosec</a>
                </li>
                <li>
                    <img src="https://static.cyberbitnews.com/img/tech.jpg" class="cat-image">
                    <a href="/category/tech" class="">Tech</a>
                </li>
                <li>
                    <img src="https://static.cyberbitnews.com/img/linux.jpg" class="cat-image">
                    <a href="/category/linux" class="">Linux</a>
                </li>
            </ul>
    </div>
<script src="/scripts/article.js">
</script>  
 <?php
 include $root . "/app/footer.php";