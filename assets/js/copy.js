    //Asigno el evento "click" del botón para provoar el copiado
    document.getElementById('btnCopiar').addEventListener('click', copiarAlPortapapeles);

    //Función que lanza el copiado del código
    function copiarAlPortapapeles(ev){
        const codigoACopiar = document.getElementById('textoACopiar');    //Elemento a copiar
        //Debe estar seleccionado en la página para que surta efecto, así que...
        const seleccion = document.createRange(); //Creo una nueva selección vacía
        seleccion.selectNodeContents(codigoACopiar);    //incluyo el nodo en la selección
        //Antes de añadir el intervalo de selección a la selección actual, elimino otros que pudieran existir (sino no funciona en Edge)
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);  //Y la añado a lo seleccionado actualmente
        try {
            let res = document.execCommand('copy'); //Intento el copiado
        }
        catch(ex) {
            excepcion();
        }
        window.getSelection().removeRange(seleccion);
    }