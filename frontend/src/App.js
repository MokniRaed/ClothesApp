import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import AddArticle from "./Components/AddArticle/AddArticle";
import Navigator from "./Components/Navbar/Navigator";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditArticle from "./Components/EditArticle/EditArticle";
import Register from "./Components/Authetification/Register";
import Login from "./Components/Authetification/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import Error from "./Components/NoInternet/Error";
import NotFound from "./Components/NotFound/NotFound";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <Navigator />
      <Routes>
        {/* Redirect the path to dashboard component */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddArticle />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditArticle />
            </PrivateRoute>
          }
        />
        <Route path="/createaccount" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
