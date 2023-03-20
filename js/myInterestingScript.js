$(document).ready(init);

function init(){
    $('#main').get(0).insertBefore(createUL(), $('#main').get(0).firstChild);;
}

function createUL(){
    var ul = jQuery('<ul>').get(0),
        li = null, a = null, i = null, 
        titles = [
            "Моя любимая музыка",
            "Любимые выди спорта",
            "Мои любимые книги",
            "Мои любимые фильмы",
            "Моя любимая"
        ];


    for (i = 0; i < titles.length; i++){
        li = jQuery('<li>').get(0);

        a = jQuery('<a>', {
            href: "#my_" + (i + 1)
        }).get(0);
        a.textContent = titles[i];
        
        li.appendChild(a);  
        ul.appendChild(li);
    }

    return ul;
}