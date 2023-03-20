$(document).ready(init);

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : JSON.stringify([]);
}

function init(){

    let arr =  JSON.parse(localStorage.getItem('history'));
    let str = $('#page').get(0).textContent+"."+(new Date());

    if (arr == null){
        let myarr=[];

        let cookieArr = JSON.parse(getCookie('all_history')) || [];
        myarr.push(str);
        cookieArr.push(str);
        
        localStorage.setItem('history', JSON.stringify(myarr));
        document.cookie = 'all_history='+JSON.stringify(cookieArr)+'; path=/lab_3; max-age=31536000; samesite=strict';
    }
    else{
        let cookieArr = JSON.parse(getCookie('all_history')) || [];
        
        arr.push(str);
        cookieArr.push(str);
        
        localStorage.setItem('history', JSON.stringify(arr));
        document.cookie = 'all_history='+JSON.stringify(cookieArr)+'; path=/lab_3; max-age=31536000; samesite=strict';
    }
}
