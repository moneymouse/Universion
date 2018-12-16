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
            }
        }
    }
    // On the mobile phone
var isdrag = true;
var tempX, x, tempY, y;

function dragStart(e) {
    isdrag = true;
    tempY = parseInt($("#testDrag").css("top") + 0);
    y = e.touches[0].pageY;
}

function dragMove(e) {
    if (isdrag) {
        var curY = tempY + e.touches[0].pageY - y;
        //边界判断
        curY = curY < 0 ? 0 : curY;
        curY = curY < document.documentElement.clientHeight - 80 ? curY : document.documentElement.clientHeight - 80;
        $("#up").css({
            "top": curY
        });
        $("#down").css({
                "bottom": curY
            })
            //禁止浏览器默认事件

    }
}

function dragEnd() {
    isdrag = false;
}

$(function() {
    document.addEventListener("touchstart", dragStart);
    document.addEventListener("touchmove", dragMove);
    document.addEventListener("touchend", dragEnd);
});