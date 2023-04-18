<?php

include('simple_html_dom.php');

error_reporting(0);





function getPosters($url)

{

    

    $moviePosterAndLink = array();

    $curl = curl_init(); 
    curl_setopt($curl, CURLOPT_URL, $url);  
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
    curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);  
    $str = curl_exec($curl);  
    curl_close($curl);  
     
    $mainUrl= str_get_html($str); 

    



    if($mainUrl == FALSE)

    {

        return [];

    }else{

        //get poster and link for evry movie

        $posters = $mainUrl->find('article[class="poster"]');

        

        foreach($posters as $index=>$poster)

        {

            // echo $poster->first_child()->href.'<br>';

            // echo $poster->first_child()->first_child()->{'data-lazy-src'}.'<br>';

            // echo $index.'<br>';

            //echo $poster->find('h3',0)->innertext.'<br>';

            //echo $poster->find('.',0)->innertext.'<br>';

            $moviePosterAndLink[$index] = array("link"=>$poster->first_child()->href,"img"=>$poster->first_child()->first_child()->{'data-lazy-src'},"name"=>$poster->find('h3',0)->innertext,"year"=>$poster->find('.year',0)->innertext);

            

            

        }



        

        // print_r($moviePosterAndLink);

        if(!empty($moviePosterAndLink))

        {

            $rand_key = array_rand($moviePosterAndLink,4);

        }else{

            $rand_key ='';

        }

       

        



        //return ['posters'=>$moviePosterAndLink,'randomMovie'=>$rand_key];
        return $moviePosterAndLink;
        

    }



    

    

}

