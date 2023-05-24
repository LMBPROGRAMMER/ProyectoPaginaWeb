$(document).ready(function () {
    
    $("#formulario3").validate({
        rules: {
            id: {
                required: true,
            },
            nombre: {
                required: true,
            },
            descripcion: {
                required: true,
            },
            precio: {
                required: true,
            },
            descuentosub: {
                required: true,
            },
            descuentoof: {
                required: true,
            },
        
        }, // --> Fin de reglas
        messages: {
            id:{
                required: "El Id es requerido"
            },
            nombre: {
                required: "El Nombre es un campo requerido",
                nombre: "El Nombre no es válido",
            },
            descripcion:{
                required: "Escriba la descricion del producto"
            },
            precio: {
                required: "Digite el precio",
                required: "Solo numero"
            },
            descuentosub: {
                required: "Digite el descuento de subscriptor",
            },
            descuentoof: {
                required: "Digite el descuento por la oferta",
            },
        },
    });
});