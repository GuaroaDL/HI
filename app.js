  function URLParametro() {
    const params = new URLSearchParams(window.location.search);
    return {
      codigo: params.get("codigo"),
      placa: params.get("placa"),
      tipo: params.get("tipo"),
      marca: params.get("marca"),
      modelo: params.get("modelo"),
      color: params.get("color"),
      ano: params.get("ano"),
      chasis: params.get("chasis"),
      fecha: params.get("fecha"),
    };
  }

  function updatePage() {
    const params = URLParametro();
    if (params.codigo) document.getElementById("codigo").textContent = params.codigo;
    if (params.placa) document.getElementById("placa").textContent = params.placa;
    if (params.tipo) document.getElementById("tipo").textContent = params.tipo;
    if (params.marca) document.getElementById("marca").textContent = params.marca;
    if (params.modelo) document.getElementById("modelo").textContent = params.modelo;
    if (params.color) document.getElementById("color").textContent = params.color;
    if (params.ano) document.getElementById("ano").textContent = params.ano;
    if (params.chasis) document.getElementById("chasis").textContent = params.chasis;
    if (params.fecha) document.getElementById("fecha").textContent = params.fecha;
  }

  // Llamar a la función cuando cargue la página
  document.addEventListener("DOMContentLoaded", updatePage);

