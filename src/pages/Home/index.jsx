import "./styles.css";

import Card from "../../Componentes/Card";

function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Manito" time="22:12:12" />
      <Card name="deded" time="22:12:12" />
      <Card name="dededeManito" time="22:12:12" />
    </div>
  );
}

export default Home;
