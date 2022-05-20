<?php
$id = explode( "/", $_GET['id'] );

$json = json_decode(file_get_contents("https://cheapfindsapi.000webhostapp.com/api/data/product.php?id=$id[0]"));
$title = $json->title;
$description = $json->description;
$image = $json->image;
$brands = $json->brands->brands;

if ($title == "NOTAVALIABLE"){
header("Location: https://cheapfinds.000webhostapp.com/");
exit();
}

?>
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
        <h1 id="logo"><a href="/index.html">CheapFinds</a></h1>
        <nav id="mySidenav" class="sidenav">
            <ul>
                <li><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a></li>
                <li><a href="Laptop.html">Laptops</a></li>
                <li><a href="desktop.html">Desktops</a></li>
                <li><a href="tablet.html">Tablet</a></li>
                <li><a href="mobile.html">Mobiles</a></li>
            </ul>   
        </nav>
        <span style="color:rgb(255, 255, 255) ; font-size:30px;cursor:pointer" onclick="openNav()" id="menu-point">&#9776; </span>

        <nav>
            <ul id="menu">
                
                <li><a href="Laptop.html">Laptops</a></li>
                <li><a href="desktop.html">Desktops</a></li>
                <li><a href="tablet.html">Tablet</a></li>
                <li><a href="mobile.html">Mobiles</a></li>
            </ul>   
        </nav>
        
    </header>

    <div id="result">
        <div id= "products">
        <img id="img-product" src="<?php echo $image ?>">
        <h4 id="title-products"><?php echo $title?></h4>
            <p id="desc-product">Description:<?php echo $description?></p> 
        </div>
        <h3>Comprarison</h3>
    <div id="Comprarison">
        <?php 
        foreach ($brands as $brand){
        if ($brand->title == NULL){
            continue;
        }else{
        echo ('<item><img src="'.$brand->logo.'" id="img"><p id="title">'.$brand->title.'</p><p id="price">'.$brand->price.'</p></item>');
        }
        }
        ?>
    </div>

    <footer>
        <ul>
            <li id="bottom_nav"><a href="privacy.html">Privacy Policy</a></li>
            <li id="bottom_nav"><a href="conditions.html">Terms and Conditions</a></li>
            <li>&copy;CheapFinds</li>
        </ul>
    </footer>
</body>
</html>
