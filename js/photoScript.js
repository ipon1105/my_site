$(document).ready(init);

let globalID;

function init(){
    $("#main").get(0).appendChild(createTable());
    $('#btn-close').click(function(e){
        $('#modal').get(0).style.display = 'none';
    })
}

//Создание figure по номеру
function createFigure(imgID){
    var el = jQuery('<figure>', {}).get(0), 
        img = jQuery('<img>', {
            src: "src/img/icon_" + imgID + ".png",
            title: "icon " + imgID,
            alt: "icon " + globalID
        }).get(0), 
        figcaption = jQuery('<figcaption>', {}).get(0);

    //Изображение и подсказка
    img.addEventListener('click', function (e) {
        globalID = imgID;
        $('#modal').get(0).style.display = 'flex';
        $('#modal-content').attr({
            src: "src/img/icon_" + imgID + ".png",
            title: "icon " + imgID,
            alt: "icon " + globalID,
        });

        $('#text').get(0).textContent = imgID + " из 15"; 
        $('#prev').click(function(e){
            $('#modal-content').hide(1000, function(){
                globalID--;
                if (globalID == 0)
                    globalID = 16;
                $('#modal').get(0).style.display = 'flex';
                $('#modal-content').attr({
                    src: "src/img/icon_" + globalID + ".png",
                    title: "icon " + globalID,
                    alt: "icon " + globalID
                });
                $('#text').get(0).textContent = globalID + " из 15"; 

                $('#modal-content').show(1000);
            });
        });

        $('#next').click(function(e){
            $('#modal-content').hide(1000, function(){
                globalID++;
                if (globalID == 16)
                    globalID = 1;
                $('#modal').get(0).style.display = 'flex';
                $('#modal-content').attr({
                    src: "src/img/icon_" + globalID + ".png",
                    title: "icon " + globalID,
                    alt: "icon " + globalID
                });
                $('#text').get(0).textContent = globalID + " из 15"; 
                
                $('#modal-content').show(1000);
            });
        });
    });

    //Текст о картинке
    figcaption.textContent = img.title;
    
    //Совмещени в один элемент
    el.appendChild(img);
    el.appendChild(figcaption);

    return el;
}

//Создание таблицы
function createTable(){
    var row = 3, col = 5;
    var i, j;

    var table = jQuery('<table>', {}).get(0),
        tbody = jQuery('<tbody>', {}).get(0),
        td = null, tr = null;

    for (i = 0; i < row; i++){
        tr = jQuery('<tr>', {}).get(0);

        for (j = 0; j < col; j++) {
            td = jQuery('<td>', {}).get(0);
            td.appendChild(createFigure(i * 5 + j + 1));

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    return table;
}
