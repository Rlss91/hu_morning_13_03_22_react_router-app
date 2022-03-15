import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";

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
        {/* <Route path="/home">
          <HomePage />
        </Route> */}
        <AuthGuardRoute path="/home" component={HomePage} />
        {/* http://localhost:3000/login */}
        {/* <Route path="/login">
          <LoginPage />
        </Route> */}
        <Route path="/login" component={LoginPage} />
        {/* http://localhost:3000/signup */}
        <Route path="/signup" component={SignupPage} />
        {/* http://localhost:3000/cardspanel */}
        {/* <Route path="/cardspanel">
          <CardsPanelPage />
        </Route> */}
        <AuthGuardRoute path="/cardspanel" component={CardsPanelPage} />
        {/* <Route path="*">
          <NotFoundPage />
        </Route> */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
