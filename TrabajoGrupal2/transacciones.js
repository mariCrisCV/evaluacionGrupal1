// Arreglo de cuentas existente
let cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 1000.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 500.0 }
];

// Cargar función inicial
cargar = function() {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

    // Deshabilitar los botones y la caja de texto de monto al inicio
    deshabilitarComponente("btnDepositar");
    deshabilitarComponente("btnRetirar");
    deshabilitarComponente("txtMonto");
}

// Buscar cuenta en el arreglo
buscarCuenta = function(numeroCuenta) {
    for (let cuenta of cuentas) {
        if (cuenta.numeroCuenta === numeroCuenta) {
            return cuenta;
        }
    }
    return null;
}

// Ejecutar búsqueda de la cuenta
ejecutarBusqueda = function() {
    let numeroCuenta = recuperarTexto("txtNumeroCuenta");
    let cuenta = buscarCuenta(numeroCuenta);
    
    if (cuenta) {
        // Muestra los datos de la cuenta
        mostrarTextoEnCaja("txtSaldo", cuenta.saldo);
        mostrarTextoEnCaja("txtNombre", cuenta.nombre + " " + cuenta.apellido);
        
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
    let cuenta = buscarCuenta(numeroCuenta);
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
        mostrarTextoEnCaja("txtSaldo", buscarCuenta(numeroCuenta).saldo);
    } else {
        alert("Monto no válido.");
    }
}

// Realizar retiro de la cuenta
retirar = function(numeroCuenta, monto) {
    let cuenta = buscarCuenta(numeroCuenta);
    if (cuenta) {
        if (cuenta.saldo >= monto) {
            cuenta.saldo -= monto;
            alert("TRANSACCIÓN EXITOSA");
            mostrarTextoEnCaja("txtSaldo", cuenta.saldo);
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
