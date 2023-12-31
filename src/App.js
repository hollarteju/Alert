import {React} from 'react';
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import SignUp from './pages/signup/signup';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { LocationContextProvider } from './locationsContext';
import { UserDetailsProvider } from './user_details';
import Setting from './pages/home/setting';
import { PrivateRoute, HomePageRoute } from './PrivateRoute';




function App() {

  return (
    <div className='app-container'>
      <LocationContextProvider>
      <UserDetailsProvider>
        <Router>
          <Navbar/>
            <Routes>
            
              <Route path="/" element={<PrivateRoute/>}/>
              <Route path="/home" element={<HomePageRoute/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </Router>
        </UserDetailsProvider>
      </LocationContextProvider>
     
    </div>
  );
}

export default App;
