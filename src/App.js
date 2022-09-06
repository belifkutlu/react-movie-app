import StarIcon from "./components/icons/StarIcon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Movie App</h1>
          <input type="text" placeholder="search movie" />
        </div>
        <div className="section">
          <div className="card">
            <div className="content">
              <h4>Evde Tek Basina</h4>
              <span className="rating">4.5</span>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h4>Evde Tek Basina</h4>
              <span className="rating">4.5</span>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h4>Evde Tek Basina</h4>
              <span className="rating">4.5</span>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h4>Evde Tek Basina</h4>
              <span className="rating">4.5</span>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h4>Evde Tek Basina</h4>
              <StarIcon className="star-icon" />
              <span className="rating">4.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
