/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $('#first-header').click(function() {
        //
        var first_content = $('#first-content');
        first_content.toggle(
                function() {
                    $(this).next().slideUp();
                    return false;
                },
                function() {
                    $(this).next().slideDown();
                    return false;
                });
    });

    var second_content = $('.control:has(#color)').next();
    var turn = true;
    $('#color').click(function() {
        //change the text color of the second paragraph

        if (turn) {
            second_content.css('color', 'red');
            turn = false;
        }
        else {
            second_content.css('color', 'black');
            turn = true;
        }
        return false;
    });

    $('#color').next().click(function() {
        //
        second_content.toggleClass('bcolored');
        return false;
    });
    /*
     $('.control:first-child').click(function(){
     //
     $('#page-wrap').toggle(
     function(){$(this).fadeOut('slow',function(){
     //when the fadeOut completes
     $('.control:first-child>span').text("Open All");
     });return true;},
     function(){$(this).fadeIn('slow',function(){
     //when the fadeIn completes
     $('.control:first-child>span').text("Close All");
     });return true;}
     );
     });*/

    var close_status = true;
    /*
     $('.control:first-child').click(function(){
     //the close-all button
     if(close_status){
     $('#page-wrap').fadeOut('slow',function(){
     $('#page-wrap').stop().css('display','hidden');
     $('.control:first-child>span').text('Open All');
     $('#page-wrap').slideUp('slow');
     });
     close_status = false;
     return false;
     }
     else{
     $('#page-wrap').css('display','none');
     $('#page-wrap').slideDown('slow',function(){
     $('.control:first-child>span').text('Close All');
     });
     close_status = true;
     return false;
     }
     });*/
    $('.control:first-child').click(function() {
        if (close_status) {
            //fade in first and then slide up
            $('#page-wrap').fadeOut('slow');
            $('#page-wrap').promise().done(function() {
                //when the animations done
                $('#page-wrap').css({'display': 'block', 'opacity': '0'}).slideUp('slow');
                $('.control:first-child>span').text('Close All');
            });
            close_status = false;
        }
        else {
            //slide down first and then fade out
            //$('#page-wrap').css('opacity', '0').slideDown('slow').fadeIn('slow');
            $('#page-wrap')
                    .css('opacity', 0)
                    .slideDown('slow',function(){
                $('#page-wrap').animate(
                    {opacity: 1},
            {queue: false, duration: 'slow'}
            );
                    });

            $('.control:first-child>span').text('Open All');
            close_status = true;
        }
    });
});


  