$(document).ready(init);

function init (e) {
    fill_local();
    fill_all();
}

function fill_local(){
    let arr = JSON.parse(localStorage.getItem('history'))||[];
    let tr, td1, td2;
    
    if (arr == null)
        return;

    for (let i = 0; i < arr.length; i++){
        tr = jQuery('<tr>').get(0);
        td1 = jQuery('<td>').get(0);
        td2 = jQuery('<td>').get(0);

        let info = arr[i].split('.');

        td1.textContent = info[0];
        td2.textContent = info[1];

        tr.appendChild(td1);
        tr.appendChild(td2);
        $('#history_table_1').get(0).appendChild(tr);
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function fill_all(){
    let arr = JSON.parse(getCookie('all_history'))||[];
    let tr, td1, td2;

    if (arr == null)
        return;

    for (let i = 0; i < arr.length; i++){
        tr = jQuery('<tr>').get(0);
        td1 = jQuery('<td>').get(0);
        td2 = jQuery('<td>').get(0);

        let info = arr[i].split('.');

        td1.textContent = info[0];
        td2.textContent = info[1];

        tr.appendChild(td1);
        tr.appendChild(td2);
        $('#history_table_2').get(0).appendChild(tr);
    }
}