// this js is uesed for some coustomed setting
// 拖动上下颜色块确认提交

var div_up = document.getElementById("up");
var div_down = document.getElementById("down");

function abs(x) {
    if (x < 0) {
        x = -x;
    }
    return x;
}
document.onmousedown = function(ev) {
        var start_y;
        var isMove = true;
        var heightest = $(document).height();
        start_y = ev.clientY;
        $(".center").hide();
        document.onmousemove = function(e) {
            if (isMove) {

                var disY = abs(e.clientY - start_y);
                var height = 0.5 * heightest;
                $("#up").offset({ top: -disY, left: 0 });
                $("#down").offset({ top: height + disY, left: 0 })
                if (disY > 150) {
                    $("#up").offset({ top: height, left: 0 });
                    $("#down").offset({ top: heightest, left: 0 })
                    window.location = "load.html"
                }
            }
            document.onmouseup = function() {
                isMove = false;
                down = 0;
                up = 0;
                start_y = 0;
                $("#down").css({ "top": "50%" });
                $("#up").css({ "top": "0" });
                document.onmousemove = null;
                $(".center").show();
            }
        }
    }
    // On the mobile phone
var isdrag = true;
var tempX, x, tempY, y;
var heightest = $(document).height();

function dragStart(e) {
    var start_y;
    isdrag = true;
    y = e.touches[0].pageY;
    $(".center").hide();
}

function dragMove(e) {
    if (isdrag) {
        var curY = abs(e.touches[0].pageY - y);
        var height = 0.5 * heightest;
        $("#up").offset({ top: -curY, left: 0 });
        $("#down").offset({ top: height + curY, left: 0 })
        if (curY > 150) {
            $("#up").offset({ top: height, left: 0 });
            $("#down").offset({ top: heightest, left: 0 })
            window.location = "load.html"
        }

    }
}

function dragEnd() {
    isdrag = false;
    up = 0;
    down = 0;
    start_y = 0;
    $("#down").css({ "top": "50%" });
    $("#up").css({ "top": "0" });
    $(".center").show();
}

$(function() {
    document.addEventListener("touchstart", dragStart);
    document.addEventListener("touchmove", dragMove);
    document.addEventListener("touchend", dragEnd);
});