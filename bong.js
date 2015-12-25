var run = 0;
var speed = 4;
$(document).ready(function () {
    try{

        if(isMobile()){
            if(!confirm("在PC下浏览更佳,是否继续?")){
                $('#main').hide();
                $("body").html('<link rel="stylesheet" href="bong.css"><p id="text" style="font-size: 30px;">MERRY CHRISTMAS</p>');
                $("html").show();
                return ;
            }
        }
    }catch(e){

    }

    $("html").show();
    speed = 10;
    $.get("bong.css", function (data) {
        style = data;
        //alert(style);
        run_style = setInterval("addStyleByEdit()", speed);
    });
    $.get("bong.html", function (data) {
        bhtml = data;
        //alert(style);
        //run_html = setInterval("addHtmlByEdit()", 1);

        $('#main').append(bhtml);
    });
});

var style_i = 0;
function addStyleByEdit() {
    try {

        if (!style.charAt(style_i)) {
            if(isMobile()){
                $('#text').css("font-size","30px");
            }
            clearInterval(run_style);
        }
        $('#edit_css').append(style.charAt(style_i));
        $('#pstyle').html($('#pstyle').html() + style.charAt(style_i));
        style_i++;
        $("#edit_css").scrollTop($("#edit_css")[0].scrollHeight);
        //console.log(style.charAt(style_i));
    } catch (e) {

    }
}


var html_i = 0;
function addHtmlByEdit() {
    try {

        if (!bhtml.charAt(html_i)) {
            clearInterval(run_html);
        }
        $('#edit_html').append(bhtml.charAt(html_i));
        html_i++;
        $("#edit_html").scrollTop($("#edit_html")[0].scrollHeight);
        //console.log(bhtml.charAt(html_i));
    } catch (e) {
        console.log(e);
    }
}

function isMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true
    }
    return false;
}
