function iniciar()
{
    var boton=document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
}
function mostrar(comentarios)
{
    var cajadatos=document.getElementById('comentarios');
    var valor=sessionStorage.getItem('comentarios');
    cajadatos.innerHTML='<div>'+comentarios+' -';
}
window.addEventListener('load', iniciar, false);