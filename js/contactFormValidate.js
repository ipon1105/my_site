$(document).ready(contactValid);

var fileds = [0,0,0,0]
var my_confirm;

function addFocusOut(el, error, regex, index) {
    el.addEventListener("focusout", function (e) {
        console.log(el);
        console.log(error);
        el.classList.remove('correct');
        el.classList.remove('uncorrect');
        error.classList.remove('visible');
        error.classList.remove('unvisible');

        if (el.value.match(regex)){
            el.classList.add('correct');
            error.classList.add("unvisible");
            error.style.display = 'none ';
            fileds[index] = 1;
        } else {
            el.classList.add('uncorrect');
            error.classList.add("visible");
            error.style.display = 'block';
            fileds[index] = 0;
        }

        var sum = 0;
        for (i = 0; i < fileds.length; i++)
        {
            sum+=fileds[i];
        }
        my_confirm.style.display = (sum == 4) ? 'inline-block' : 'none';
        
    });
}

function contactValid() {
    $('#btn-close').click(function(e){
        $('#modal').get(0).style.display = 'none';
    });

    my_confirm = $('#send').get(0);

    $('#form').get(0).addEventListener('submit', function (e) {
        e.preventDefault();
        $('#modal').get(0).style.display = 'flex';
        $('#prev').click(function(e){
            $('#modal').get(0).style.display = 'none';
            return false;
        });

        $('#next').click(function(e){
            $('#modal').get(0).style.display = 'none';
            window.open('mailto:my_world1105@mail.ru?subject=FeedBack');
            return true;
        });
        return false;
    });

    var fioRegex = /[а-яА-Я]{1,}\s[а-яА-Я]{1,}\s[а-яА-Я]{1,}/;
    var telRegex = /^\+[7|3]\d{8,10}/;
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    var dateRegex = /\d+\/\d+\/\d{4}/;

    addFocusOut($("#fio").get(0), $('#fioerror').get(0), fioRegex, 0);
    addFocusOut($("#tel").get(0), $('#telerror').get(0), telRegex, 1);
    addFocusOut($("#email").get(0), $('#emailerror').get(0), emailRegex, 2);
    addFocusOut($("#my_date").get(0), $('#dateerror').get(0), dateRegex, 3);
    
    my_confirm.style.display = 'none';
}
