/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    /*$('li:has(ul)').mouseenter(
    function(){
        $('li ul').stop(true, true).animate({opacity: 1},4000);
    });
    $('li:has(ul)').mouseleave(function(){
        $('li ul').stop(true, true).animate({opacity: 0},3000);
    });*/
    $('ul li:hover>ul').css('display','none');
    
    /*fade out first*/
    $('li:has(ul)').children('ul').stop(true,true).animate({opacity: 0},1500,function(){
            $(this).css('display','none');
        });
    
    $('li:has(ul)').hover(function(){
        $(this).children('ul').stop(true,true).css('display','block');
        $(this).children('ul').animate({opacity: 1},2000);
    },function(){
        $(this).children('ul').stop(true,true).animate({opacity: 0},1500,function(){
            $(this).css('display','none');
        });
    });
});
