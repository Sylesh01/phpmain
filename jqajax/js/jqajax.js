$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: 'GET',
        success: function(users){
            str = `<table><tr>`;
            for (key in users) {
                str += `<th>${key}</th>`;
                }
                str +=`</tr><tr>`;
            for (user in users) {
            str += `<td>${user.id}</td>`;
            }
        str+= `</tr></table>`;
            $('#data').html(str);
            console.log(data);
        },
        error : function(data){
            console.log(data);
        } 
        });
    });
});