$(document).ready(function () {
    
    $("#formulario_bodega").validate({
        rules: {
            cantidad: {
                required: true,
            },
        
        }, // --> Fin de reglas
        messages: {
            cantidad: {
                required: "Digite el precio",
                required: "Solo numero"
            },
        },
    });
});