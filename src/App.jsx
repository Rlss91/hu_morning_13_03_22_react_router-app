import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
// import CardInfoPage from "./pages/CardInfoPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import QueryParams from "./pages/QueryParams";
// import SignupPage from "./pages/SignupPage";

import useRandomNumber from "./hooks/useRandomNumber";

const SignupPage = React.lazy(() => import("./pages/SignupPage"));

function App() {
  const randNumber = useRandomNumber(50, 100);
  return (
    <div className="container">
      <NavBarComponent></NavBarComponent>
      <ToastContainer />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* http://localhost:3000/home */}
          <Route path="/home" element={<HomePage />} />
          {/* http://localhost:3000/login */}
          <Route path="/login" element={<LoginPage />} />
          {/* http://localhost:3000/signup */}
          <Route path="/signup" element={<SignupPage />} />
          {/* http://localhost:3000/cardspanel */}
          <Route path="/cardspanel" element={<AuthGuardRoute />}>
            <Route element={<CardsPanelPage />} />
          </Route>
          {/* <AuthGuardRoute path="/card/:id" element={CardInfoPage} /> */}
          <Route path="/qparams" element={<QueryParams />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {randNumber}
    </div>
  );
}

export default App;
