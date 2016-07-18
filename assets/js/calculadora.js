

function suma(){
var num11=parseFloat(document.getElementById("num1").value);
var num21=parseFloat(document.getElementById("num2").value);
var suma=num11+num21;
document.getElementById("resu").value=suma;
    
}
function resta(){
var num11=document.getElementById("num1").value;
var num21=document.getElementById("num2").value;
var resta=num11-num21;
  document.getElementById("resu").value=resta;  
}
function division(){
var num11=document.getElementById("num1").value;
var num21=document.getElementById("num2").value;
var resta=num11/num21;
 document.getElementById("resu").value=resta;

    
}
function multiplicacion(){
var num11=document.getElementById("num1").value;
var num21=document.getElementById("num2").value;
var resta=num11*num21;
  document.getElementById("resu").value=resta;
    
}
function residuo(){
var num11=document.getElementById("num1").value;
var num21=document.getElementById("num2").value;
var resta=num11%num21;
  document.getElementById("resu").value=resta;
    
}
