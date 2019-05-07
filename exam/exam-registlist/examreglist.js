
var ExamRegList = new XMLHttpRequest();
var ERegisObj;

ExamRegList.open('GET','http://localhost:8080/exam-register/rest/modules/1/exam/1/registers',true);
ExamRegList.responseType = 'text';
ExamRegList.send(null);
console.log(ExamRegList.status);
ExamRegList.onload = function(){
    if (ExamRegList.status === 200){
        
        ERegisObj = JSON.parse(ExamRegList.responseText);
        //console.table(ERegisObj);
        
        var col = [];
        for (var i = 0; i < ERegisObj.length; i++) {
            for (var key in ERegisObj[i]) {
                if (col.indexOf(key) === -1) {
                    if(key == "accountid" || key == "code"  || key =="id1"|| key =="username" ||key =="userpassword"){
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
        for (var i = 0; i < ERegisObj.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = ERegisObj[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        }
    
        

    }
    

