import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Register from './Components/Register';
import {Routes,Route} from 'react-router-dom'
import Edit from './Components/Edit';
import Detail from './Components/Detail';


function App() {
  return (
   <>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}/>   
        <Route path='/register' Component={Register}/>   
        <Route path='/edit/:id' Component={Edit}/>
        <Route path='/view/:id' Component={Detail}/>
      </Routes>
    </>
  );
}

export default App;
