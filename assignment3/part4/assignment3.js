/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    //
    $('ul li a').css({backgroundPosition: '0px -3px'});
    $('#shutter1').css({backgroundPosition: '0px 0px'});
    $('#shutter2').css({backgroundPosition: '0px 0px'});
    $('#shutter3').css({backgroundPosition: '0px 0px'});
    $('#shutter4').css({backgroundPosition: '0px 0px'});
    
    //animation
    $('li a').hover(function(){
        $(this).parent().stop().animate({backgroundPosition: '(0px -100px)'}, 500);
    },function(){
        $(this).parent().stop().animate({backgroundPosition: '(0px 0px)'}, 500);
    });
});
