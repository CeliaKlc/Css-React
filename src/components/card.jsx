import reactLogo from "../assets/react.svg";

function Card() {
  return (
    <div className="card">
      <img className="logo-react" src={reactLogo} alt="Logo React" />
      <div>
        <h1>React</h1>
        <p className="desc">Bibliothèque JS</p>
        <p className="sous-desc">
          Cela permet de construire des interfaces utilisateur.
        </p>
      </div>
      <div>
        <h3>Subtitle</h3>
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
        <button>Item 4</button>
        <p className="footer">ACTION 1</p>
      </div>
    </div>
  );
}

export default Card;
