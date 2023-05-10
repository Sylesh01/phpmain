function ajaxcall(){
    xhr = new XMLHttpRequest();
    xhr.open('GET','information.JSON',true);
    xhr.send();
    xhr.onload = function(){
        result = xhr.responseText;
        result = JSON.parse(result);
        console.log(result);
        str = `<table><tr>`;
        for(key in result){
            str=str + `<th>${key}</th>`;            
        }
        str += `</tr><tr>`;
        for(key in result){
            str=str+ `<td>${result[key]}</td>`
        }
        str = str+ `</tr></table>`;
        document.getElementById('info').innerHTML = str;
    }
}