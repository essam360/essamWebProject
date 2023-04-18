<?php
require("MovieController.php");


$result=null;
if(isset($_GET['method']) && $_GET['method']== "index" )
{ 
    $result =  index();

}elseif (isset($_GET['method']) && $_GET['method']== "movie" ) {

    $link = $_GET['link'];
    $result = movie($link);
}elseif (isset($_GET['method']) && $_GET['method']== "category") {

    $category = $_GET['category'];
    $page = $_GET['page'];
    $result = catogery($category,$page);

    
}
elseif (isset($_GET['method']) && $_GET['method']== "movie") {

    $link = $_GET['link'];
    $result = movie($link);

    
}
elseif (isset($_GET['method']) && $_GET['method']== "search") {

    $searchkey = $_GET['searchkey'];
    $result = search($searchkey);
    
    

    
}

header('Content-Type: application/json; charset=utf-8');
//print(json_encode($result));
echo json_encode($result);




?>