$(document).ready(contactValid2);

function contactValid2() {
    var fio = $("#fio_1").get(0);
    var checkArr = document.getElementsByName('check[]');
    var i = null, count = 0;

    $("#form").get(0).addEventListener("submit", function(e) {    
        count = 0;
        e.preventDefault();

        var fioRegex = /[а-яА-Я]{1,}\s[а-яА-Я]{1,}\s[а-яА-Я]{1,}/;

        if (!fio.value.match(fioRegex)){
            alert("Неверное поле ФИО.");
            fio.focus();
            return false;
        }

        for (i of checkArr){
            if (i.checked)
                count++;
        }

        if (count < 3) {
            alert("Установлены менее 3 переключателей.");
            $("#my_box").get(0).focus();
            return false;
        }

        if ($("#input_1").get(0).value == null || !$("#input_1").get(0).value.match(/[а-яА-Я]{1,}/)){
            alert("Неверное поле ввода.");
            $("#input_1").get(0).focus();
            return false;
        }

        window.open('mailto:my_world1105@mail.ru?subject=FeedBack');
        return true;
    });
}
