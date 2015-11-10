$(document).ready(function(){
    var tipdiv = $("div#info div.tip");
    $("#info").toggle(function() {
        //tipdiv.show();
                      tipdiv.slideDown();
    }, function() {
        //tipdiv.hide();
                      tipdiv.slideUp();
    });
});