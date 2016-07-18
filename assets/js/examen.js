function calcular() {
    
    var prod=document.getElementById("productos").value;
    var cantidad=document.getElementById("canti").value;
    var can=prod*cantidad;
    document.getElementById("totalx").value=can;
}
var num=0;
var sum=0;
function agregar() {
    
    var tableReg = document.getElementById('tablaP');
    var rows='';
    var produ=document.getElementById("productos");
    var selec=produ.options[produ.selectedIndex].text;
    var y=document.getElementById('productos').value;
    var ca=document.getElementById("canti").value;
   var z=document.getElementById("totalx").value;
   rows+="<tr><td>"+selec+"</td><td>"+y+"</td><td>"+ca+"</td><td>"+z+"</td><tdy>";
   $(rows).appendTo('#tablaP tbody');
   //esto es para sumar los datos 
   var xx=z;
    sum+=parseInt(z); 
 /* for (var i = 0; i <= num; i++) {
  sum+=parseInt(z); 
  document.getElementById("totalpag").value=z;
  
  }*/
  document.getElementById("tot").value=sum;


    num++;
}
function nueva() {

    var dA="0.0";
  document.getElementById("totalx").value=dA;
    document.getElementById("tot").value=dA;
     document.getElementById("canti").value=dA;
document.getElementById("contenido_tabla").innerHTML = "";
/*for(var ss=$("#tablaP tr").lenght; ss>1; ss--){
$("#tablaP tr:last").remove();
}*/
}