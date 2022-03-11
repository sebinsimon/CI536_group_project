<?php
header('Content-type: text/javascript');
$get = $_GET['get'];
$flink = "https://www.amazon.co.uk/dp/".$get;
        $curl = curl_init();
        curl_setopt_array($curl, array(
          CURLOPT_URL => $flink,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_HTTPHEADER => array(
          ),
        ));
          

        echo "hello world";


        $response = curl_exec($curl);
        curl_close($curl);
        $source =  strval($response);
        print_r ($response);
        $title = get_string_between($source, '<meta name="title" content="', '" />');
        $price = get_string_between($source, '[{"displayPrice":"', '","priceAmount":');
        #echo $title;
        #echo $price;
        $data = array('title' => html_entity_decode($title), 'price' => htmlspecialchars_decode($price));
        echo json_encode($data);
        
function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}

?>
