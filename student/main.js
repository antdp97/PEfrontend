
var studentAccount = new XMLHttpRequest();
var sObj;

studentAccount.open('GET','http://localhost:8080/exam-register/rest/students',true);
studentAccount.responseType = 'text';
studentAccount.send(null);
console.log(studentAccount.status);
studentAccount.onload = function(){
    if (studentAccount.status === 200){
        
        sObj = JSON.parse(studentAccount.responseText);
        //console.table(sObj);
        
        var col = [];
        for (var i = 0; i < sObj.length; i++) {
            for (var key in sObj[i]) {
                if (col.indexOf(key) === -1) {
                    if(key == "accountid" || key == "code"  || key =="id1"){
                        continue;
                    }
                    else {
                    col.push(key);
                    }
                }
            }
        }
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        $(document).ready(function(){
            $("table").addClass("table");
        });


        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        
        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < sObj.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = sObj[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        }
    
        

    }
    

