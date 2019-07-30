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
 <?php
 include $root . "/app/footer.php";
