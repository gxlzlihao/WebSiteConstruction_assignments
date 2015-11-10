/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    /*$('#inventory').tablesorter({sorterList:[[2,0]]});*/
    //var sortable = false;
    /*
    $(th).click(function(){
        //resort the table according to specific column
        var columnNum = $(this).parents('tr').children('th').index(this);
        $('#inventory').tablesorter({sorterList:[columnNum,0]});
        //sortable = true;
        return false;
    });*/
    //var check = false;
    $('#inventory').tablesorter();
    //$(th).click(function(){check=true;});
    $('th').hover(function(){
        //if(check){
        $(this).css('cursor','pointer');
    });
    
});

