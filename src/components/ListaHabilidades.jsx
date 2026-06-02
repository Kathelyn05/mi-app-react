function ListaHabilidades() {
  const habilidades = [
    "React",
    "JavaScript",
    "CSS",
    "Node.js",
    "Git",
    "TypeScript",
  ];

  return (
    <div>
      <h3>Habilidades técnicas</h3>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaHabilidades;
