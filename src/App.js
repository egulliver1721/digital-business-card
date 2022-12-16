import "./App.css";
import Header from "./Header.js";
import Information from "./Information.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="app--container">
        <Header />
        <div className="business--card--container">
          <Information />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
