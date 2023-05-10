$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: 'GET',
        xhrFields: {
            onprogress: function(){
                str = "Loading....";
            $('#data').html(str);
            }
        },
        success: function(users){
            str = `<table><tr>`;
            var firstUser = users[0];
                for (var key in firstUser) {
                    str += `<th>${key}</th>`;
                }
                str +=`</tr>`;
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                str += `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street}, ${user.address.city}, ${user.address.zipcode}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</td>
                    </tr>`;
            }
            // for (var key in users[0]) {
            //     str += `<th>${key}</th>`;
            // }
            // str +=`</tr><tr>`;
            // for (var i = 0; i < users.length; i++) {
            //     var user = users[i];
            //     for (var prop in user) {
            //         if (prop === "address") {
            //             var address = user[prop];
            //             str += `<td>${address.street}, ${address.city}, ${address.zipcode}</td>`;
            //         } else if (prop === "company") {
            //             var company=user[prop];
            //             str += `<td>${company.name}, ${company.catchPhrase}, ${company.bs}</td>`;
            //         } else {
            //             str += `<td>${user[prop]}</td>`;
            //         }
            //     }
            //     str += `</tr><tr>`;
            // }
        str+= `</table>`;
            $('#data').html(str);
            console.log(users);
        },
        error : function(){
            str = "Error";
            $('#data').html(str);
        } 
        });
    });
});