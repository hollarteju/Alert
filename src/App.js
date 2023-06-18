import React from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Home from './pages/home/home';
import ProductDetails from './pages/productDetails/productDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LocationContextProvider } from './locationsContext';
import SignInPage from './pages/signIn/signIn';

function App() {
  return (
    <div className='app-container'>
      <LocationContextProvider>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<SignInPage/>}></Route>
              <Route path="/home" element={<Home/>}/>
              <Route path="/signup" element={<ProductDetails/>}/>
            
            </Routes>
        </Router>
      </LocationContextProvider>
     
    </div>
  );
}

export default App;
