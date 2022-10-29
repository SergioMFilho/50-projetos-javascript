import "./styles.css";

import Card from "../../Componentes/Card";

function Home() {
  return (
    <div className="container">
      <body>
        <div className="container">
          <div
            className="panel active"
            style={{
              backgroundImage: `url(
                "https://images.unsplash.com/photo-1628522300947-065b5ddcd3de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              )`,
            }}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(
                "https://images.unsplash.com/photo-1596237563267-84ffd99c80e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              )`,
            }}
          >
            <h3>Forest</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(
                "https://images.unsplash.com/photo-1551382801-104df360840a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTQ3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              )`,
            }}
          >
            <h3>Sea</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(
                https://images.unsplash.com/photo-1616272963049-da2d8efc0c57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
              )`,
            }}
          >
            <h3>Desert</h3>
          </div>
          <div
            className="panel"
            style={{
              backgroundImage: `url(
                https://images.unsplash.com/photo-1550275994-cdc89cd1948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60
              )`,
            }}
          >
            <h3>Lights</h3>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Home;
