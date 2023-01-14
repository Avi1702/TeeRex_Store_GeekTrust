import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './components/AllRoutes';
import { Filter } from './components/Filter';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
       <Navbar/>
       <Filter/>
       <AllRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
