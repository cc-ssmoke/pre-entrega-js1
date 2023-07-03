alert("Bienvenido a Entrega 1");
let continuar_o_finalizar = prompt("Pulsa 1 para continuar o 2 para finalizar");



function saludar(nombre) {

    if (nombre == "") {

        alert("Esto no es un nombre");

    } else {

        alert("Bienvenido/a " + nombre);

    }

}


if (continuar_o_finalizar == 2) {

    alert("Gracias por tu visita");

}


else {

    let nombre = prompt("Ingrese su nombre de usuario");
    saludar(nombre);

}



let corroborar_cobertura;

if (continuar_o_finalizar != 2) {
    corroborar_cobertura = prompt("Actualmente contamos con cobertura en LATAM. Si perteneces a esta zona ingrese SI, de lo contario ingrese NO");
}

if (corroborar_cobertura == "NO") {

    alert("Agradecemos tu interes, pronto nos ampliaremos a otros continentes");

} else if (corroborar_cobertura == "SI") {

    alert("Genial! Te invitamos a interactuar con la consola para ver los paises donde puedes ingresarte");
    console.log("Argentina");
    console.log("Chile");
    console.log("Uruguay");

}



let confirmar_direccion;

if (continuar_o_finalizar != 2) {
    confirmar_direccion = prompt("Ingresa 1 si estas ubicado en Argentina. Ingresa 2 si estas ubicado en Chile. Ingresa 3 si estas en uruguay. De lo contrario ingresa NO");
}


let Claro = 3600;
let Movistar = 5000;
let Personal = 3000;

if (confirmar_direccion == 1 || confirmar_direccion == 2) {

    alert("Genial! Te invitamos a ver los precios de nuestro servicios.");
    console.log("El servicio de internet tiene un costo de $", Claro, "finales");
    console.log("El servicio de Internet tiene un costo de $", Movistar, "finales");
    console.log("El servicio de Internet tiene un costo de $", Personal, "finales");

}
else if (confirmar_direccion == "NO") {

    alert("Agradecemos tu interes, pronto ampliaremos nuestra zona de cobertura");

}


let contratar_servicio;

if (continuar_o_finalizar != "2") {
    contratar_servicio = prompt("Elegi la opcion que desees contratar: Claro, Movistar, Personal o 4 SALIR");
}

let contacto;

while (contratar_servicio != "SALIR") {


    if (contratar_servicio == 1) {
        alert("Perfecto! Te invitamos a ver la consola para saber el precio del paquete seleccionado");
        console.log("El paquete de Internet 100 + TV basica tiene un costo de $", television + internet_cien, "finales");
        contacto = prompt("Dejanos tu numero de telefono para ser contactado a la brevedad. El mismo sera registrado en la consola");
        console.log("El numero de telefono registrado es ", contacto);
    }
    else if (contratar_servicio == 2) {
        alert("Perfecto! Te invitamos a ver la consola para saber el precio del paquete seleccionado")
        console.log("El paquete de Internet 50 + TV basica tiene un costo de $", television + internet_cincuenta, "finales");
        contacto = prompt("Dejanos tu numero de telefono para ser contactado a la brevedad. El mismo sera registrado en la consola");
        console.log("El numero de telefono registrado es ", contacto);
    }
    else if (contratar_servicio == 3) {
        alert("Perfecto! Te invitamos a ver la consola para saber el precio del paquete seleccionado");
        console.log("El paquete de TV basica tiene un costo de $", television, "finales");
        contacto = prompt("Dejanos tu numero de telefono para ser contactado a la brevedad. El mismo sera registrado en la consola");
        console.log("El numero de telefono registrado es ", contacto);
    }
    else if (continuar_o_finalizar != "2") {
        contratar_servicio = prompt("Si quiere ver el precio de otro servicio elegi la opcion que desees contratar: 1 Internet 100 MB + TV,  2 Internet 50 MB + TV, 3 TV o  SALIR")
    }
    break
}