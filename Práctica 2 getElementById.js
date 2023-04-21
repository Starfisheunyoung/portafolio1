function suma()
{
    var numero1=document.getElementById("numero2").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt(numero1)+parseInt(numero2);
    document.getElementById("resul").innerHTML=resul;
    
}
function resta()
{
    var numero1, numero2, resul;
    var numero1=document.getElementById("numero2").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt(numero1)-parseInt(numero2);
    document.getElementById("resul").innerHTML=resul;
}
function multiplica()
{
    var numero1, numero2, resul;
    var numero1=document.getElementById("numero2").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt(numero1)*parseInt(numero2);
    document.getElementById("resul").innerHTML=resul;
}
function divide()
{
    var numero1, numero2, resul;
    var numero1=document.getElementById("numero2").value;
    var numero2=document.getElementById("numero2").value;
    resul=parseInt(numero1)/parseInt(numero2);
    document.getElementById("resul").innerHTML=resul;
}