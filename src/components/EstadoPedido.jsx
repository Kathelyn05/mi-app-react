function EstadoPedido() {
  const estado = "enviado"; 
  const icono =
    estado === "pendiente"
      ? "⏳"
      : estado === "enviado"
      ? "🚚"
      : estado === "entregado"
      ? "✅"
      : "❌";

  const mensaje =
    estado === "pendiente"
      ? "Tu pedido está siendo procesado"
      : estado === "enviado"
      ? "Tu pedido está en camino"
      : estado === "entregado"
      ? "Tu pedido ha sido entregado"
      : "Tu pedido fue cancelado";

  return (
    <div>
      <p>
        {icono} {mensaje}
      </p>
      {estado === "enviado" && (
        <p>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  );
}

export default EstadoPedido;