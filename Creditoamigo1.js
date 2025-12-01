// SIMULACIÓN DE BASE DE DATOS JAVA (10 CLIENTES)
const DATABASE = [
    // 1. Cliente de ejemplo (Pagado)
    {
        telefono: "86241141",
        password: "2025",
        rol: "CLIENTE",
        nombre: "JOSE RAMÓN CABALLERO SILVA",
        cedula: "281-180704-1005S",
        credito: 9280.00,
        pendiente: 8080.00,
        pagos: [
            { canon: 1, monto: 1160.00, vencimiento: "30 nov 2025", estado: "ABONADO" },
            { canon: 2, monto: 1160.00, vencimiento: "15 dic 2026", estado: "PENDIENTE" },
            { canon: 3, monto: 1160.00, vencimiento: "30 dic 2026", estado: "PENDIENTE" },
            { canon: 4, monto: 1160.00, vencimiento: "15 ene 2026", estado: "PENDIENTE" },
            { canon: 5, monto: 1160.00, vencimiento: "30 ene 2026", estado: "PENDIENTE" },
            { canon: 6, monto: 1160.00, vencimiento: "15 feb 2026", estado: "PENDIENTE" },
            { canon: 7, monto: 1160.00, vencimiento: "30 feb 2026", estado: "PENDIENTE" },
            { canon: 8, monto: 1120.00, vencimiento: "15 mar 2026", estado: "PENDIENTE" },
        ]
    },
    // 2. Cliente con saldo pendiente
    {
        telefono: "77522520",
        password: "2025",
        rol: "CLIENTE",
        nombre: "Tierna Gisela Perez",
        cedula: "281-000000-0000",
        credito: 5500.50,
        pendiente: 1100.10,
        pagos: [
            { canon: 1, monto: 1100.10, vencimiento: "01 Nov 2025", estado: "PAGADO" },
            { canon: 2, monto: 1100.10, vencimiento: "01 Dic 2025", estado: "PENDIENTE" },
            { canon: 3, monto: 1100.10, vencimiento: "01 Ene 2026", estado: "PENDIENTE" },
        ]
    },
    // 3. cliente tercero.

{
        telefono: "00000000",
        password: "0000",
        rol: "CLIENTE",
        nombre: "Nombre y Apellido",
        cedula: "cedula",
        credito: 000,
        pendiente: 0000,
        pagos: [
            { canon: 1, monto: 1160.00, vencimiento: "30 nov 2025", estado: "ABONADO" },
            { canon: 2, monto: 1160.00, vencimiento: "15 dic 2026", estado: "PENDIENTE" },
            { canon: 3, monto: 1160.00, vencimiento: "30 dic 2026", estado: "PENDIENTE" },
            { canon: 4, monto: 1160.00, vencimiento: "15 ene 2026", estado: "PENDIENTE" },
            { canon: 5, monto: 1160.00, vencimiento: "30 ene 2026", estado: "PENDIENTE" },
            { canon: 6, monto: 1160.00, vencimiento: "15 feb 2026", estado: "PENDIENTE" },
            { canon: 7, monto: 1160.00, vencimiento: "30 feb 2026", estado: "PENDIENTE" },
            { canon: 8, monto: 1120.00, vencimiento: "15 mar 2026", estado: "PENDIENTE" },
        ]
    },
// 5. Cliente numero 5
{
        telefono: "00000000",
        password: "0000",
        rol: "CLIENTE",
        nombre: "Nombre y Apellido",
        cedula: "Cedula",
        credito: 0000,
        pendiente: 0000,
        pagos: [
            { canon: 1, monto: 1160.00, vencimiento: "30 nov 2025", estado: "ABONADO" },
            { canon: 2, monto: 1160.00, vencimiento: "15 dic 2026", estado: "PENDIENTE" },
            { canon: 3, monto: 1160.00, vencimiento: "30 dic 2026", estado: "PENDIENTE" },
            { canon: 4, monto: 1160.00, vencimiento: "15 ene 2026", estado: "PENDIENTE" },
            { canon: 5, monto: 1160.00, vencimiento: "30 ene 2026", estado: "PENDIENTE" },
            { canon: 6, monto: 1160.00, vencimiento: "15 feb 2026", estado: "PENDIENTE" },
            { canon: 7, monto: 1160.00, vencimiento: "30 feb 2026", estado: "PENDIENTE" },
            { canon: 8, monto: 1120.00, vencimiento: "15 mar 2026", estado: "PENDIENTE" },
        ]
    },1
    // ... (Se podrían añadir 7 clientes más aquí para llegar a 10)
];

let currentUser = null;
let currentClientData = null; // Usaremos los datos del Cliente 1 por defecto al logear como ADMIN

// --- FUNCIÓN DE AUTENTICACIÓN (Simula la llamada al API de Java) ---
function simularLogin() {
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;

    const user = DATABASE.find(u => u.telefono === telefono && u.password === password);

    if (user) {
        currentUser = user;
        
        // El Jefe accede a los datos de un cliente (usamos el primer cliente como demo)
        if (currentUser.rol === 'ADMIN') {
            currentClientData = DATABASE.find(u => u.rol === 'CLIENTE'); 
            alert(`Acceso como JEFE exitoso! Viendo cuenta de ${currentClientData.nombre}`);
        } else {
            // El Cliente solo ve sus propios datos
            currentClientData = currentUser;
            alert(`Acceso como CLIENTE exitoso! Bienvenido ${currentUser.nombre}`);
        }
        
        mostrarDatosCuenta();
    } else {
        alert("Credenciales inválidas. Por favor, intente de nuevo.");
    }
}

// --- FUNCIÓN DE RENDERIZADO DE DATOS ---
function mostrarDatosCuenta() {
    if (!currentClientData) return;

    // Ocultar login y mostrar datos
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('data-container').classList.remove('hidden');
    
    // Configurar información de bienvenida y rol
    document.getElementById('welcome-message').textContent = `Usuario: ${currentUser.nombre}`;
    document.getElementById('rol-tag').textContent = currentUser.rol;
    document.getElementById('rol-tag').className = `rol-tag ${currentUser.rol}`;

    // Configurar detalles del cliente (usamos el cliente visto, no el admin logeado)
    document.getElementById('client-name').textContent = `Cuenta: ${currentClientData.nombre}`;
    document.getElementById('info-cedula').textContent = currentClientData.cedula;
    document.getElementById('info-telefono').textContent = currentClientData.telefono;
    document.getElementById('info-credito').textContent = `C$ ${currentClientData.credito.toFixed(2)}`;
    document.getElementById('info-pendiente').textContent = `C$ ${currentClientData.pendiente.toFixed(2)}`;
    
    // Renderizar la tabla y aplicar lógica de roles
    renderizarPagos(currentClientData.pagos, currentUser.rol);
}

// --- FUNCIÓN DE AUTORIZACIÓN (Muestra/Oculta la funcionalidad del Jefe) ---
function renderizarPagos(pagos, rol) {
    const tbody = document.getElementById('payments-body');
    tbody.innerHTML = ''; // Limpiar tabla
    
    const isAdmin = (rol === 'ADMIN');
    
    // Mostrar/Ocultar columna de acción y botón de registro
    if (isAdmin) {
        document.querySelector('.action-header').classList.remove('hidden');
        document.getElementById('add-payment-btn').classList.remove('hidden');
    } else {
        document.querySelector('.action-header').classList.add('hidden');
        document.getElementById('add-payment-btn').classList.add('hidden');
    }

    // Llenar filas
    pagos.forEach(pago => {
        const row = tbody.insertRow();
        row.insertCell().textContent = pago.canon;
        row.insertCell().textContent = `C$ ${pago.monto.toFixed(2)}`;
        row.insertCell().textContent = pago.vencimiento;
        
        // Celda de Estado con estilo de tag
        const statusCell = row.insertCell();
        statusCell.innerHTML = `<span class="status-tag ${pago.estado}">${pago.estado}</span>`;
        
        // Celda de Acción (solo para ADMIN)
        const actionCell = row.insertCell();
        if (isAdmin) {
            actionCell.classList.remove('hidden');
            actionCell.innerHTML = `<button class="btn-edit" onclick="editarPago(${pago.canon})">Editar</button>`;
        } else {
            actionCell.classList.add('hidden');
        }
    });
}

// --- FUNCIONES DE ACCIÓN DEL JEFE ---
function editarPago(canon) {
    alert(`Funcionalidad de Jefe: Editando el Canon ${canon} del cliente ${currentClientData.nombre}.`);
    // Aquí iría la lógica de Java (API) para hacer un PUT/PATCH a la base de datos.
}

// --- FUNCIÓN DE CIERRE DE SESIÓN ---
function logout() {
    currentUser = null;
    currentClientData = null;
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('data-container').classList.add('hidden');
    document.getElementById('telefono').value = '';
    document.getElementById('password').value = '';
    alert("Sesión cerrada.");
}
