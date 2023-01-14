import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './components/AllRoutes';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
       <Navbar/>
       <AllRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
