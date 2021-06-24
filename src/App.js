
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Services from './components/Services/Services';
import LogIn from './components/LogIn/LogIn';
import WriteReview from './components/Reviews/WriteReview/WriteReview';
import AddService from './components/Services/AddService/AddService';
import { createContext } from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import Navbar from './components/Home/Header/Navbar/Navbar';
import OrderService from './components/OrderService/OrderService';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState();
 
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>   
    
   

    <Router>
      <Navbar/>
     
     
     <Switch>
     <Route exact path="/"> 
     <Home> </Home>
      </Route>


     <Route path="/laundryService"> 
     <Services/>
     </Route>


     <Route path="/login"> 
     <LogIn/>
     </Route>


     <Route path="/OrderService/:id"> 
     <OrderService/>
     </Route>


     <PrivateRoute path="/userInfo/:phone"> 
     <Dashboard/>
     </PrivateRoute>


     <PrivateRoute path="/WriteReview"> 
     <WriteReview/>
     </PrivateRoute>


     <PrivateRoute path="/admin"> 
     <AddService/>
     </PrivateRoute>


     </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
