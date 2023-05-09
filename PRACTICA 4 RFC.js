function rfc()
{
    var nombre, ap, am, anio, mes, dia;
    nombre = document.getElementById("nombre").value;
    ap = document.getElementById("ap").value;
    am = document.getElementById("am").value;
    anio = document.getElementById("year").value;
    mes = document.getElementById("mes").value;
    dia = document.getElementById("dia").value;
    var subcad1= nombre.substring(0,1);
    var subcad2= ap.substring(0,2);
    var subcad3= am.substring(0,1);
    var subcad4= anio.substring(2,4);
    var concatenar = subcad2.concat(subcad1+subcad3+subcad4+mes+dia);
    var mayus= concatenar.toUpperCase();
    document.getElementById("resultado").value=mayus;

}