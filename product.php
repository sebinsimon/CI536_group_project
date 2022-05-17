<?php
$id = explode( "/", $_GET['id'] );

$json = json_decode(file_get_contents("https://groupprojectci536.000webhostapp.com/api/data/product.php?id=$id[0]"));
$title = $json->title;
$description = $json->description;
$image = $json->image;
$brands = $json->brands->brands;

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
        <img id="img-product" src="<?php echo $image ?>">
        <h4 id="title-products"><?php echo $title?></h4>
            <p id="desc-product">Description:<?php echo $description?></p> 
        </div>
        <h3>Comprarison</h3>
    <div id="Comprarison">
        <?php 
        foreach ($brands as $brand){
        echo ('<item><img src="'.$brand->logo.'" id="img"><p id="title">'.$brand->title.'</p><p id="price">'.$brand->price.'</p></item>');
        }
        ?>
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
