var myHeading = document.querySelector('h2');
var myButton = document.querySelector('button');
var mybutton1 =document.getElementById("submit_button")

var n=0;
//mydatetime.value=new Date().toISOString();

/*
try{
  localStorage.getItem("submit_button");
}catch(e){
  alert("we are in catch "+e.print);
  setUserName();
}

if(localStorage.getItem('name') === null) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }
 
*/
//myButton.onclick = function() {
//  submitfunction();
//}
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent  = 'Hellow world, ' 
    myHeading.innerHTML = 'Hello world, '
  }

function submitfunction(){
  var myname=document.getElementById("name");
  var myemail=document.getElementById("email");
  var mydatetime=document.getElementById("datetime");
  var pay = document.getElementsByName("pay");
  var quantity_val=document.getElementById("quantity");
  var s="Name:"+myname.value+"\n";
  n++;
  s=s+"email:"+myemail.value+"\n";
  s=s+"數量:"+quantity_val.value+"\n";
  s=s+"日期:"+mydatetime.value+"\n";
  for (var i = 0 ; i < pay.length ; i++) {
    if (pay[i].checked) {
     s=s+"付費方式:"+pay[i].value+"\n";
    }
  }  
  confirm(s);

}  


 