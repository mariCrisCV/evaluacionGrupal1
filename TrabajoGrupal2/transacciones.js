cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

// Cargar función inicial
cargarPaginaTRansacciones = function() {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

    // Deshabilitar los botones y la caja de texto de monto al inicio
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
    deshabilitarComponente("txtMonto");
}

// Buscar cuenta en el arreglo
buscarCuentaTransaccion = function(numeroCuenta) {
    for (let cuenta of cuentas) {
        if (cuenta.numeroCuenta === numeroCuenta) {
            return cuenta;
        }
    }
    return null;
}

// Ejecutar búsqueda de la cuenta
ejecutarBusquedaTransaccion = function() {
    let numeroCuenta = recuperarTexto("txtNumeroCuenta");
    let cuenta = buscarCuentaTransaccion(numeroCuenta);
    
    if (cuenta) {
        // // Muestra los datos de la cuenta
        mostrarTexto("datosCuentaNumero", "NUMERO DE CUENTA: "+cuenta.numeroCuenta);
        mostrarTexto("datosCuentaNombre", "NOMBRE: "+cuenta.nombre+" "+cuenta.apellido);
        mostrarTexto("datosCuentaSaldo", "SALDO: "+cuenta.saldo);
        
        // Habilita los botones de depositar y retirar, y la caja de texto para el monto
        habilitarComponente("btnDepositar");
        habilitarComponente("btnRetirar");
        habilitarComponente("txtMonto");
    } else {
        alert("CUENTA INEXISTENTE");
    }
}

// Realizar depósito en la cuenta
depositar = function(numeroCuenta, monto) {
    let cuenta = buscarCuentaTransaccion(numeroCuenta);
    if (cuenta) {
        cuenta.saldo += monto;
    }
}

// Ejecutar la acción de depósito
ejecutarDeposito = function() {
    let numeroCuenta = recuperarTexto("txtNumeroCuenta");
    let monto = recuperarFloat("txtMonto");
    
    if (monto > 0) {
        depositar(numeroCuenta, monto);
        alert("TRANSACCIÓN EXITOSA");
        mostrarTexto("datosCuentaSaldo", "SALDO: "+ buscarCuentaTransaccion(numeroCuenta).saldo);
    } else {
        alert("Monto no válido.");
    }
}

// Realizar retiro de la cuenta
retirar = function(numeroCuenta, monto) {
    let cuenta = buscarCuentaTransaccion(numeroCuenta);
    if (cuenta) {
        if (cuenta.saldo >= monto) {
            cuenta.saldo -= monto;
            alert("TRANSACCIÓN EXITOSA");
            mostrarTexto("datosCuentaSaldo", "SALDO: "+ cuenta.saldo);
        } else {
            alert("SALDO INSUFICIENTE");
        }
    }
}

// Ejecutar la acción de retiro
ejecutarRetiro = function() {
    let numeroCuenta = recuperarTexto("txtNumeroCuenta");
    let monto = recuperarFloat("txtMonto");
    
    if (monto > 0) {
        retirar(numeroCuenta, monto);
    } else {
        alert("Monto no válido.");
    }
}
