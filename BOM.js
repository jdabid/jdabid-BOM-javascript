let nombre = prompt('Escriba su nombre');
if (confirm(nombre + ' Desea eliminar la información?')) {
    alert('Cuidado ' + nombre + ' perderá todos los datos');
    
} else {
    alert(nombre + ' No tiene permitido eliminar la informacióm');
}