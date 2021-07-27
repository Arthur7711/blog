import { Route, Switch } from "react-router-dom";
import ButtonAppBar from "./components/Header";
import CallList from "./pages/CallList/CallList";
import Home from "./pages/Home/Home";
import loginPage from "./pages/loginPage/LoginPage";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/call-list' component={CallList} />
        <Route path='/notes' component={Notes} />
        <Route path='/register' component={loginPage} />
      </Switch>
    </div>
  );
}

export default App;
