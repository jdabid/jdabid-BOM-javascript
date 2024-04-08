let nuevaVentana;
function crearVentana() {
    nuevaVentana = window.open('','Nueva Ventana', 'status, height=200, windht=300');
    
}

function escribe() {
    if (nuevaVentana.closed) {
        crearVenatana();        
    }
    nuevaVentana.focus();
    let contenido = "<htlm><head><tittle>Nueva Ventana</tittle></head>";
    contenido += "<body color='blue'><h1>Buenas tardes</h1></body></htlm>";
    nuevaVentana.window.status = 'Bienvenido';
    nuevaVentana.document.write(contenido);
    nuevaVentana.document.close();
}