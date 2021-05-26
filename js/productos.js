var Capturar = function(){
        let lstProducto = document.getElementsByClassName("producto"),
            arrayGuardar = [];         
        for (var i = 0; i < lstProducto.length; i++) {    
            arrayGuardar[i] = lstProducto[i].value;
           //alert (lstProducto[i].value);     
            alert(arrayGuardar[i]); 
            }   

        }