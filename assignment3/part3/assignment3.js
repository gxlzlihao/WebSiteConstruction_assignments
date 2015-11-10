/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    //split the paragraph
    var content = $('#page-wrap>h1:first-child').next();
    var original_text = content;
    
    //change by lihao
    var ori_paragraphs = content.contents().filter(function() {
         if( this.nodeType == 3 && $.trim(this.data) != "") { //get only text nodes and filter out whitespace elements
           return true;
        }
      }).get();
      //paragraphs is an array
      var paragraphs = jQuery.makeArray(ori_paragraphs)

    var String1 = "";
    var resStr = "";
    var String2 = "";
    var i=0;
    var x=0;
    //by lihao
    for(;i<paragraphs.length;i++){
        String1 = String1 + paragraphs[i].data.toString();
        if(String1.length>428){
            break;
        }
    }
    for(;x<=i;x++){
        resStr = resStr + paragraphs[x].data.toString() + "<br /><br />";
    }
    for(x=i+1;x<paragraphs.length;x++){
        String2 = String2 + paragraphs[x].data.toString() + "<br /><br />";
    }
    //end of lihao
    
    content.html(resStr);
    content.after("<b class=\"read_button\">Read more....</b>");
    var readmore = true;
    
    $('.read_button').click(function(){
        //
        if(readmore){
            //expand the text
            //fade in and slide down at the same time
            //content.html(resStr + " " + String2);
            content.after("<p id=\"temple\">"+String2+"</p>")
            $('#temple').css('opacity','0');
            var tt_height = $('#temple').css('height');
            $('#temple').animate({height:tt_height},{duration:'slow',queue:false}).animate(
                    {opacity: 1},
            {queue: false, duration: 'slow'}
            );
            //alert(tt_height);
            $(this).text("Read less....");
            readmore = false;
            return false;
        }
        else{
            //shrink the text
            //and fade out and slide up at the same time
            $('#temple').animate({
            height: 0,
        }, {
            duration: 1000,
            complete: function(){$('#temple').css('display', 'none');}
        }).animate({
            opacity: 0,
        }, {
            duration: 1000,
            queue: false
        });
            content.html(resStr);
            $(this).text("Read more....");
            readmore = true;
            return false;
        }
    });
});
