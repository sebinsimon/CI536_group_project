<!doctype html>
<html>
<head>
    <meta charset="utf8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!--<script src="/index.js"></script>-->
    <link rel="stylesheet" href="/index.css">
    <title>CI536</title> 
    
</head>
<body>
    <header id="banner">
        <h1>UniBuy</h1>
        <nav>
            <ul>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Desktops</a></li>
                <li><a href="#">Tablet</a></li>
                <li><a href="#">Mobiles</a></li>
                <li><input id="search" type="text" placeholder="Search Producds or Brands"></li>
            </ul>
            
        </nav>
        
    </header>

    <div id="result">
        <div id= "products">
        <img id="img-product" src="/laptop.png">
        <h4 id="title-products"> title </h4>
            <p id="desc-product">Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </div>
        <h3>Comprarison</h3>
    <div id="Comprarison">
        <img src="/amazon.png">
        <h4>title and describtion</h4>
        <p>price: $1,000</p>
    </div> 
    </div>

    <footer>
        <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">About us</a></li>
        </ul>
    </footer>
</body>
</html>



<?php
$id = explode( "/", $_GET['id'] );
echo $id[0];



?>