import "./App.css";
import Home from "./core/Home";
import Footer from "./shared/footer";
import Header from "./shared/header";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Forms from "./core/Forms/Forms";

function App() {
  return (
    <main className="main" style={{ height: height() }}>
      <Router>
      <Header />
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/forms" component={Forms} />
        </Switch>
        <Footer />
      </Router>

      
    </main>
  );
}

function height() {
  let heightt = window.innerHeight;
  heightt = heightt - 160;
  return heightt;
}

export default App;
