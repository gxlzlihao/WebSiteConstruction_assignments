/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    //
    $('.dropdown').mouseenter(function(){
        $('.sublinks').stop(false, true).hide();
        var submenu = $(this).parent().next();
        submenu.css({
            position:'absolute',
            top:$(this).offset().top + $(this).height() + 'px',
            left:$(this).offset().left + 'px',
            zIndex:1000
        });
        
        submenu.stop().slideDown(300);
        
        submenu.mouseleave(function(){
            $(this).slideUp(300);
        });
    });
    
    $('.dropdown').mouseleave(function(){
        //when the mouse leaves the menu
        $('.sublinks').stop(false, true).slideUp(300);
    });
});
