<?php
 include $root . "/app/head.php";
 include $root . "/app/side-bar.php";
?> 
     <div class="main-container">
        <?php include $root . "/app/header.php"; ?>
        <div class="content">
            <div class="search-wrapper">
                <h3 class="heading main-heading">Search site</h3>
                <form action="/search/" method="GET" class="main-search">
                    <input 
                        name="id" 
                        placeholder="search site" 
                        autocomplete="off" 
                        autofocus="" 
                        class="search-field main-search-field">
                    <button type="submit" class="search_button main-search-button">
                    <i class="icon-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>     
 <?php
 include $root . "/app/footer.php";