function consultaParametros() {
    const parametros = {};
    const consultaString = window.location.search; // Obtener la parte del query string
    const urlparametros = new URLSearchParams(consultaString);
    
    // Guardar cada parámetro en el objeto 'parametros'
    urlparametros.forEach((value, key) => {
        parametros[key] = value;
    });
    return parametros;
}

// Función para actualizar los valores en la página
function actualizarValores() {
    const parametros = consultaParametros();

    // Actualizar elementos si existen los parámetros
    if (parametros.codigo) document.getElementById('codigo').textContent = parametros.codigo;
    if (parametros.placa) document.getElementById('placa').textContent = parametros.placa;
    if (parametros.tipo) document.getElementById('tipo').textContent = parametros.tipo;
    if (parametros.marca) document.getElementById('marca').textContent = parametros.marca;
    if (parametros.modelo) document.getElementById('modelo').textContent = parametros.modelo;
    if (parametros.color) document.getElementById('color').textContent = parametros.color;
    if (parametros.ano) document.getElementById('ano').textContent = parametros.ano;
    if (parametros.chasis) document.getElementById('chasis').textContent = parametros.chasis;
    if (parametros.fecha) document.getElementById('fecha').textContent = parametros.fecha;
}

// Llamar a la función para actualizar los valores
actualizarValores();