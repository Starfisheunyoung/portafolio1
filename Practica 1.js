function suma()
{
    var suma1, suma2, resul;
    suma1=prompt("Escribe un numero", "");
    suma2=prompt("Escribe otro numero", "");
    resul=parseInt(suma1)+parseInt(suma2);
    alert("La suma es: "+resul);
}
function resta()
{
    var resta1, resta2, re;
    resta1=prompt("Escribe un numero", "");
    resta2=prompt("Escribe otro numero", "");
    re=parseInt(resta1)-parseInt(resta2);
    alert("La resta es: "+re);
}
function multiplica()
{
    var mul1, mul2, resu;
    mul1=prompt("Escribe un numero", "");
    mul2=prompt("Escribe otro numero", "");
    resu=parseInt(mul1)*parseInt(mul2);
    alert("La multiplicacion es: "+resu);
}
function divide()
{
    var div1, div2, res;
    div1=prompt("Escribe un numero", "");
    div2=prompt("Escribe otro numero", "");
    res=parseInt(div1)/parseInt(div2);
    alert("La divicion es: "+res);
}
function posneg()
{
    var posneg, suma2, resul;
    posneg=prompt("Escribe un numero", "");
    if (parseInt(posneg)>0) 
    {
        alert("Es positivo");
    } else (parseInt(posneg)>0) 
    {
        alert("Es negativo");
    }
}