import "./App.css";
import Home from "./core/Home";
import Footer from "./shared/footer";
import Header from "./shared/header";

function App() {
  return (
    <main className="main" style={{height: height()}}>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

function height() {
  let heightt = window.innerHeight;
  heightt = heightt -500;
  return 0;
}

export default App;
