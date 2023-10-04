import {React} from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Home from './pages/home/home';
import SignUp from './pages/signup/signup';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { LocationContextProvider } from './locationsContext';
import SignInPage from './pages/signIn/signIn';
import { UserDetailsProvider } from './user_details';
import { PrivateRoute, HomePageRoute } from './PrivateRoute';




function App() {

  return (
    <div className='app-container'>
      <LocationContextProvider>
      <UserDetailsProvider>
        <Router basename='/alert'>
          <Navbar/>
            <Routes>
            
              <Route path="/" element={<PrivateRoute/>}/>
              <Route path="/home" element={<HomePageRoute/>}/>
          
              <Route path="/signup" element={<SignUp/>}/>
            
            </Routes>
        </Router>
        </UserDetailsProvider>
      </LocationContextProvider>
     
    </div>
  );
}

export default App;
