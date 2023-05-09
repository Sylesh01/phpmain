function ajaxcall(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','information.JSON',true);
    xhr.send();
    xhr.onload = function(){
        result = xhr.responseText;
        result = JSON.parse(result);
        for(key in result){
            console.log(key);
            console.log(result[key]);
        }
    }
}