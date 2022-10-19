import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddArticle from './Components/AddArticle/AddArticle';
import Navigator from './Components/Navbar/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path='/add' element={<AddArticle/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </div>
  );
}

export default App;
