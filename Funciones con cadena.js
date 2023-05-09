function tamano()
{
    var nom=document.getElementById("nombre").value;
    var resultado=nom.length;
    document.getElementById("resul").value=resultado;
}
function concatenar()
{
    var nom=document.getElementById("nombre").value;
    //Dejar un espacio entre las cadenas
    //nom=nom+" ";
    nom=nom+" ";
    var apaterno=document.getElementById("ap").value;
    var resultado=nom.concat(apaterno);
    document.getElementById("resul").value=resultado;
}
function mayusculas()
{
    var nom=document.getElementById("nombre").value;
    var resultado=nom.toUpperCase();
    document.getElementById("resul").value=resultado;
}
function minusculas()
{
    var nom=document.getElementById("nombre").value;
    var resultado=nom.toLowerCase();
    document.getElementById("resul").value=resultado;
}
function posicion()
{
    var nom=document.getElementById("nombre").value;
    var ind=document.getElementById("indice").value;
    var resultado=nom.charAt('ind');
    document.getElementById("resul").value=resultado;
}
function contraria()
{
    var nom=document.getElementById("nombre").value;
    var indc=document.getElementById("contrain").value;
    var resultado=nom.indexOf('indc');
    document.getElementById("resul").value=resultado;
}
function ultima()
{
    var nom=document.getElementById("nombre").value;
    var indc=document.getElementById("ultima").value;
    var resultado=nom.lastindexOf('ultima');
    document.getElementById("resul").value=resultado;
}
function separar()
{
    var nom=document.getElementById("nombre").value;
    var cadena=nom.split(" ");
    for(i in cadena)
    {
        alert(cadena[i])
    }
}