$(document).ready(init);

var lastElement = null;
var lastDay = null;
var lastMonth = null;
var lastYear = null;

function init(){
    $('#my_date').focus(onFocus);
    $('#fio').focus(onBlur);
    $('#tel').focus(onBlur);
    $('#women').focus(onBlur);
    $('#man').focus(onBlur);
    $('#email').focus(onBlur);
    $(".calendar-month").change(onSelectChange);
    $(".calendar-year").change(onSelectChange);
}   

function onSelectChange(e){
    $(".calendar-days").get(0).innerHTML = "";
    $(".calendar-days").get(0).appendChild(createTable(
        Number(($(".calendar-year").get(0)).value.slice(1)), 
        Number(($(".calendar-month").get(0)).value.slice(1)) - 1
    ));
}

function onBlur(e){
    $("#calendar").get(0).setAttribute("class", "calendar-none");
}

function onFocus(e) {
    $("#calendar").get(0).setAttribute("class", "calendar");

    $(".calendar-days").get(0).innerHTML = "";
    $(".calendar-days").get(0).appendChild(createTable(
        Number(($(".calendar-year").get(0)).value.slice(1)), 
        Number(($(".calendar-month").get(0)).value.slice(1)) - 1
    ));
}

function createTable(year, month){
    var table = jQuery("<table>", {}).get(0), 
        i = null, tr = null, td = null, day = null, maxDay = null,
        dayOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    //Заполняем заголовок таблицы
    tr = jQuery("<tr>", {}).get(0);
    for (i = 0; i < 7; i++){
        td = jQuery("<td>", {}).get(0);
        td.textContent = dayOfWeek[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //Исчисляем количество дней недели
    day = 1;
    maxDay = getMaxDaysOfMonth(month, year);
    while(day <= maxDay){
        tr = jQuery("<tr>", {}).get(0);

        //Обрабатываем первую неделю
        if (day == 1)
        {
            var current_dayOfWeek = (new Date(Number(year), month, 1, 12, 0, 0, 0).getDay() + 6) % 7,
                start_dayOfWeek = getMaxDaysOfMonth(month - 1, year) - current_dayOfWeek + 1;

            for (i = 0; i < 7; i++)
            {
                td = jQuery("<td>", {}).get(0);
                td.textContent = (i < current_dayOfWeek) ? start_dayOfWeek++ : day++;
                td.setAttribute("class", (i < current_dayOfWeek) ? "block-select-day day" : "unselect-day day");
                if (lastDay != null && lastYear != null && lastMonth != null && 
                    day - 1 == lastDay && month == lastMonth && year == lastYear)
                    td.setAttribute("class", "select-day day");
                td.addEventListener("click", dayClick);

                tr.appendChild(td);
            }

            table.appendChild(tr);
            continue;
        }

        //Обрабатываем Остальные недели
        for (i = 0; i < 7; i++) {
            if (day > maxDay)
                break;
            
            td = jQuery("<td>", {}).get(0);
            td.textContent = day++;
            td.setAttribute("class", "unselect-day day");
            if (lastDay != null && lastYear != null && lastMonth != null && 
                day - 1 == lastDay && month == lastMonth && year == lastYear)
                td.setAttribute("class", "select-day day");
            td.addEventListener("click", dayClick);

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    return table;
}

//Функция возращает максимальное значение месяца определённого года
function getMaxDaysOfMonth(month, year){

    // Обработка крайних случаев
    if (month < 0){
        year--;
        month = 11;
    }

    if (month > 11){
        year += month / 12;
        month = month % 12;
    }

    switch(month){
        case 0: case 2: case 4: case 6: 
        case 7: case 9: case 11:
            return 31;
        break;
        case 3: case 5: case 8: case 10:
            return 30;
        break;
        case 1:
            return (year % 4 == 0) ? 29 : 28;
        break; 
    }
}

function dayClick(e){
    if (e.explicitOriginalTarget.getAttribute("class") == "block-select-day day")
        return;
    lastElement?.setAttribute("class", "unselect-day day"); 
    lastElement = e.explicitOriginalTarget;
    lastDay = Number(e.explicitOriginalTarget.textContent);
    e.explicitOriginalTarget.setAttribute("class", "select-day day");

    lastMonth = calendar_month = Number(($(".calendar-month").get(0)).value.slice(1)) - 1,
    lastYear = calendar_year = Number(($(".calendar-year").get(0)).value.slice(1));
    
    $("#my_date").get(0).value = "" + 
    Number(($(".calendar-month").get(0)).value.slice(1)) + "/" +
    e.explicitOriginalTarget.textContent + "/" +
    Number(($(".calendar-year").get(0)).value.slice(1));

    $("#my_date").get(0).focus();
    
}