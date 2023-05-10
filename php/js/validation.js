function validateFirstName() {
    var firstname = document.getElementById("firstname").value;
    if (firstname == "") {
        document.getElementById("fnameerr").innerHTML = "please enter a name";
    }else {
        fnameerr.innerHTML = "";
    }
}

function validateSalary(){
    
    var salary = document.getElementById("salary").value;
    if (salary.length >5){
        xmlhttp.onreadystatechange = function() {
        var xmlhttp = new XMLHttpRequest();        
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("salaryerr").innerHTML = xmlhttp.responseText;
            } else{
                document.getElementById("salaryerr").innerHTML = "";
            }
          }
          xmlhttp.open("GET", "response.txt", true);
          xmlhttp.send();
    }
    
}