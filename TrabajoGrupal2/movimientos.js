let movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

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



