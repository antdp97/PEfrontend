var studentAccount = new XMLHttpRequest();
var stuadd;

studentAccount.open('GET','http://localhost:8080/exam-register/rest/students',true);
studentAccount.responseType = 'text';
studentAccount.send();
console.log(studentAccount.status);
studentAccount.onload = function(){
    if (studentAccount.status === 200){
        
        stuadd = JSON.parse(studentAccount.responseText);
        console.log(stuadd[0].firstname);

        $('#accountid').val(stuadd[0].accountid);
        $('#f-name').val(stuadd[0].firstname);
        $('#st-code').val(stuadd[0].code)  ;        
        $('#st-id1').val(stuadd[0].id1);
        $('#st-id').val(stuadd[0].id);
        $('#username').val(stuadd[0].username) ;
        $('#password').val(stuadd[0].userpassword) ;
        $('#l-name').val(stuadd[0].lastname);
        /*btn click to update*/
        $('#btn').click(function(){

        	/*var fname = $('f-name').val();
        	var lname = $('l-name').val();
        	var stcode = $('st-code').val();
        	var username = $('username').val();
        	var password = $('password').val();

        	var fname = 'hi';
        	var lname = 'he';
        	var stcode = 'he';
        	var username = 'he';
        	var password = 'he';
            var accountid = "1";
            var stid1 ="1";
            var stid = "1";*/


        	var jsondata = {
                'accountid':    $('#accountid').val(),
        		'firstname':    $('#f-name').val(),
        		'code':         $('#st-code').val(),
                'id1':          $('#st-id1').val(),
                'id':           $('#st-id').val(),
        		'username':     $('#username').val(),
        		'userpassword': $('#password').val(),
                'lastname':     $('#l-name').val()
        	};
        	console.log(jsondata);
        	
        	

            
        	$.ajax({
                type:'PUT',
        		url: 'http://localhost:8080/exam-register/rest/students/1',
        		
   				crossDomain: true,
   				//headers: {  'Access-Control-Allow-Origin': 'http://localhost' },
                data:{},
        		dataType:"json",

        		
        		success:function(){
        			alert('nice');
        			data: JSON.stringify(jsondata);
        			
        		},

        		error:function(err){
        			alert(err.message);

        		}
        	})
            
        	console.log(stuadd[0]);
        })

    }
}
