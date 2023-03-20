var safe_click = false;
$(document).ready(init);

function init() {
    console.log("start init");
    var time = jQuery('<time>', {
        id: 'date'
    }).get(0),
        div = $("header").get(0).getElementsByTagName("div")[0];

    div.insertBefore(time, div.firstChild);
    console.log("stop init");
    onTopMenuClick();
    updateTime();
    setInterval(updateTime, 1000);
}

function onTopMenuClick(){

    $('#li_top_of_submenu').get(0).onclick = function(){
        safe_click = !safe_click;

        if ($("#ul_submenu").get(0) == null)
            return;
        
        if (safe_click){
            $('#li_top_of_submenu').get(0).style.position = "relative"
            $("#ul_submenu").get(0).style.display = "block";
        } else {
            $("#ul_submenu").get(0).style.display = "none";
            $("#ul_submenu").get(0).style.position = "absolute";
            $("#ul_submenu").get(0).style.top = "30px";
        }
    }
}


//Обновить время
function updateTime() {
    console.log("update time");
    dateTime = new Date(), res = "";

    // ЧЧ.ММ.ГГГГ День недели
    res += dateTime.getUTCDate() + " ";
    switch (dateTime.getMonth() - 1) {
        case 0:
            res += " Января ";
            break;
        case 1:
            res += " Февраля ";
            break;
        case 2:
            res += " Марта ";
            break;
        case 3:
            res += " Апреля ";
            break;
        case 4:
            res += " Майя ";
            break;
        case 5:
            res += " Июня ";
            break;
        case 6:
            res += " Июля ";
            break;
        case 7:
            res += " Августа ";
            break;
        case 8:
            res += " Сентября ";
            break;
        case 9:
            res += " Октября ";
            break;
        case 10:
            res += " Ноября ";
            break;
        case 11:
            res += " Декабря ";
            break;
        default:
            break;
    }
    res += dateTime.getUTCFullYear() + " ";
    switch (dateTime.getDay()) {
        case 0:
            res += "Понедельник";
            break
        case 1:
            res += "Вторник";
            break
        case 2:
            res += "Среда";
            break
        case 3:
            res += "Четверг";
            break
        case 4:
            res += "Пятница";
            break
        case 5:
            res += "Суббота";
            break
        case 6:
            res += "Воскресенье";
            break
    }

    $("#date").get(0).textContent = decodeURIComponent(res);
}