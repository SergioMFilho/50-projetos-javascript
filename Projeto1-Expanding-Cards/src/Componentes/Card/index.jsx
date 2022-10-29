import "./styles.css";

function Card(props) {
  return (
    <div className={props.className} style={props.backgroundImage}>
      <h3>{props.descricao}</h3>
    </div>
  );
}

export default Card;
