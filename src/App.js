import { Route, Switch } from "react-router-dom";
import "./App.css";
// import Card from "./components/Card";
import ButtonAppBar from "./components/Header";
import CallList from "./pages/CallList/CallList";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/call-list' component={CallList} />
        <Route path='/notes' component={Notes} />
      </Switch>
    </div>
  );
}

export default App;
