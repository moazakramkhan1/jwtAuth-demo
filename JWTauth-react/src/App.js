import './App.css';
import { Navbar } from './components/navbar';
import { Register } from './components/registerForm';
import {Login} from './components/LoginForm'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Home } from './components/home';

function App() {
  

  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' exact Component={Home} ></Route>
        <Route path='/login' Component={Login} ></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
