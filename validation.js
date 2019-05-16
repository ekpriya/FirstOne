/* 
function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  

}  */
console.log("FFF");
function validateformregister(){  

    var name=document.querySelector('#name').value;
    var age=document.querySelector('#age').value;
    var email=document.querySelector('#email').value;
    var mobile=document.querySelector('#mobile').value;
    var pass=document.querySelector('#pass').value;
 	console.log(name);
 	console.log(age);
 	console.log(email);
 	console.log(mobile);
 	console.log(pass);

    if((name.length>25)||(parseInt(age)<18)||(!valEmail(email))||(!(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)))||(!valPassword(pass))){
        //console.log("Functio");
        //return false;
        console.log(name.length);
        if(name.length>25){
            document.querySelector('#nameError').textContent="Name Should not exceed 25 Charecters";
            //console.log(name);
        }
        else
        document.querySelector('#nameError').textContent="";

        if(parseInt(age)<18){
            document.querySelector('#ageError').textContent="u r still a kid";
        }else
        document.querySelector('#ageError').textContent="";

        if(!valEmail(email)){
            document.querySelector('#emailError').textContent="its an  invalid email address";
        }else
        document.querySelector('#emailError').textContent="";

        if(!(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile))){
            document.querySelector('#mobileError').textContent="its an invalid mobile number";
        }else
        document.querySelector('#mobileError').textContent="";

        if(!valPassword(pass)){
            document.querySelector('#passError').textContent="Password should be 18 to 20";
        }else 
        document.querySelector('#passError').textContent="";
       
        return false;
    }}


   
//Validates Email
    function valEmail(emailAddress){
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))){
            return false;
        }else{
            return true;
        }
    }

    function valPassword(passwordText){
        if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(passwordText))){
            return false;
        }else{
            return true;
        }
    }

    $(document).ready(function ()
     {
        $('input[id$=tbDate]').datepicker({});
    }
    );
$(document).ready(function(){
    $('input[id$=tbtime]').timepicker({});
});

/*$(document).ready( function() {
    $('input[id$=tbdrag]' ).draggable({});
  } );
  $( function() {
    $( "#tbdrag" ).draggable();
  } );
*/
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
         
      },
      out: function( event, ui ) {
        $( this )
          .removeClass( "ui-state-highlight" )
         
      }
    });
  } );