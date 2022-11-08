import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddArticle from "./Components/AddArticle/AddArticle";
import Navigator from "./Components/Navbar/Navigator";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditArticle from "./Components/EditArticle/EditArticle";
import Register from "./Components/Authetification/Register";
import Login from "./Components/Authetification/Login";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/add" element={<AddArticle />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditArticle />} />
        <Route path="/createaccount" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
