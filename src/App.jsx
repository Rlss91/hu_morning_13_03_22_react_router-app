import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="container">
      <NavBarComponent></NavBarComponent>
      <Switch>
        {/* http://localhost:3000/ */}
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {/* http://localhost:3000/home */}
        <Route path="/home">
          <HomePage />
        </Route>
        {/* http://localhost:3000/login */}
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* http://localhost:3000/cardspanel */}
        <Route path="/cardspanel">
          <CardsPanelPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
