let cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargarPaginaCuentas = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}

mostrarCuentas = function () {
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
    let cmpTabla = document.getElementById("tablaCuentas");
    let contenidoTabla = "<table><tr>" +
        "<th>NUMERO CUENTA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SALDO</th>" +
        "</tr>";
    let elementoCuenta;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        contenidoTabla +=
            "<tr><td>" + elementoCuenta.numeroCuenta + "</td>"
            + "<td>" + elementoCuenta.nombre + " " + elementoCuenta.apellido + "</td>"
            + "<td>" + elementoCuenta.saldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let elementoCuenta;
    let cuentaEncontrada = null;
    for (let i = 0; i < cuentas.length; i++) {
        elementoCuenta = cuentas[i];
        if (elementoCuenta.numeroCuenta == numeroCuenta) {
            cuentaEncontrada = elementoCuenta;
            break;
        }
    }
   return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let cuentaBusqueda = buscarCuenta(cuenta.numeroCuenta);
    if (cuentaBusqueda == null) {
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    } else {
        alert("CUENTA EXISTENTE");
    }
}

agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let datoNumeroCuenta = recuperarTexto("txtNumeroCuenta");
    let datoNombre = recuperarTexto("txtNombre");
    let datoSaldo = recuperarTexto("txtSaldo");
    let cuenta = {};
    cuenta.numeroCuenta = datoNumeroCuenta;
    cuenta.nombre = datoNombre;
    cuenta.saldo = datoSaldo;
    
    agregarCuenta(cuenta);
    mostrarCuentas();
}

cargar=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}

filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta=[];
    //Se barre el arreglo de movimientos
    for(let i=0;i<movimientos.length;i++){
        if(movimientos[i].numeroCuenta==numeroCuenta){
            movimientosCuenta.push(movimientos[i]);
        }
    //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
    mostrarMovimientos(movimientosCuenta);

    }   
}   

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){
    let cuentaDebito
    let cuentaCredito


    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    let cmpTabla = document.getElementById("tablaMovimientos");
    let contenidoTabla = "<table><tr>" +
        "<th>NUMERO</th>" +
        "<th>MONTO</th>" +
        "<th>OPERACION</th>" +
        "</tr>";
        for (let i = 0; i < misMovimientos.length; i++) {
            let elementoMovimiento = misMovimientos[i];
            cuentaDebito=elementoMovimiento.tipo
            cuentaCredito=elementoMovimiento.tipo
            if(cuentaDebito=='D'){
                let montoNegativo=elementoMovimiento.monto*=-1;
                contenidoTabla += "<tr>" +
                "<td>" + elementoMovimiento.numeroCuenta + "</td>" +
                "<td>" + montoNegativo + "</td>" +
                "<td>" + elementoMovimiento.tipo + "</td>" +
                "</tr>";
    
            }else{
                contenidoTabla += "<tr>" +
                "<td>" + elementoMovimiento.numeroCuenta + "</td>" +
                "<td>" + elementoMovimiento.monto + "</td>" +
                "<td>" + elementoMovimiento.tipo + "</td>" +
                "</tr>";
            }

            
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
        
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)

    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
}

ejecutar=function(){
    let numeroCuenta=document.getElementById("txtNumeroCuenta").value;
    filtrarMovimientos(numeroCuenta);

}



