function TablaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.5, disponible: false },
    { id: 3, nombre: "Teclado", precio: 45.0, disponible: true },
    { id: 4, nombre: "Monitor", precio: 300.0, disponible: true },
    { id: 5, nombre: "Auriculares", precio: 80.99, disponible: false },
  ];

  return (
    <div>
      <h3>Lista de productos</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td
                style={{
                  color: producto.disponible ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {producto.disponible ? "Disponible" : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;