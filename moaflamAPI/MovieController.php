<?php


//include('simple_html_dom.php');
include('getposters.php');




//index fun home movie
function index()
{
    $mainurl = 'https://www.fushaar.com';
    $result =getPosters($mainurl);
    return $result;
}


//all movie in sp catogery
function catogery($catogery,$page)
{
    $mainurl = 'https://www.fushaar.com/gerne/';
    
    if(!empty($catogery) || !empty($page))
    {
        if($page == 1)
        {
            $mainurl .=$catogery.'/';
        }else{
            $mainurl .=$catogery.'/page/'.$page;
        }
        
        $result = getPosters($mainurl);

        return $result;
   
    }
    
}











//show movie in movie page 
function movie($link)
{   
    if(!empty($link))
    {
        //information about movie
        $movieInfo = array();

        $curl = curl_init(); 
        curl_setopt($curl, CURLOPT_URL, $link);  
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);  
        $str = curl_exec($curl);  
        curl_close($curl);  
        
        $movie= str_get_html($str); 

        
        $infos = $movie->find('.z-info h8');
        foreach($infos as $info)
        {
            array_push($movieInfo,$info->innertext);
        }

        $moviename = $movie->find('#single span',1)->innertext;
        

        

        //print_r($movieInfo);
        //get poster image link
        $posterImg = $movie->find('.poster img',0);
        $posterImg = $posterImg->{'data-lazy-src'};

        //get story
        $movieStory = $movie->find('.postz p',0)->innertext;

        // get iframe's
        $movieIframes = array();
        $iframes = $movie->find('.jtab iframe');
        foreach($iframes as $iframe)
        {
        array_push($movieIframes, $iframe->{'data-lazy-src'});
        }
        $movieIframes = array_filter($movieIframes);
        $movieIframes = array_values($movieIframes); 

        //print_r($movieIframes);

        //return view('movie', ['movieinfo'=>$movieInfo, 'posterimg'=>$posterImg, 'moviestory'=>$movieStory, 'movieiframes'=>$movieIframes, 'name'=>$moviename]);
        return ['movieinfo'=>$movieInfo, 'posterimg'=>$posterImg, 'moviestory'=>$movieStory, 'movieiframes'=>$movieIframes, 'name'=>$moviename];
        

    }else{
        //return view('erorr.404');
        return "404";
    }

    

}


//search 
function search($searchkey)
{
    
    $searchkey =  str_replace(' ','+',$searchkey);
    $mainurl = 'https://www.fushaar.com/?s='.$searchkey;
    
    

    $result=getPosters($mainurl);

    if(!empty($result))
    {
        
        return $result;
    }else{
        return [];
    }
    
    
}













