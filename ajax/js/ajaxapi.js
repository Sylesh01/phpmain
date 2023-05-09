function ajaxapicall(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/india',true);
    xhr.send();
    xhr.onload = function(){
        result = xhr.responseText;
        result = JSON.parse(result);
        console.log(result);
        document.getElementById('info').innerHTML = "";
    }
    xhr.onprogress= function() {
        document.getElementById('info').innerHTML = 'Loading....';
    }
}