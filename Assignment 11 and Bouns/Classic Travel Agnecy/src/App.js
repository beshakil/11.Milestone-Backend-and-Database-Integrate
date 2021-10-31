import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Details from './Details/Details';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Services from './Services/Services';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import NoteFound from './Page/NoteFound/NoteFound';
import AddServices from './AddServices/AddServices';
import MyOrders from './Page/MyOrders/MyOrders';
import ManageOrders from './Page/ManageOrders/ManageOrders';
import Order from './Page/Order/Order';
import Event from './Page/Events/Event';
import Contact from './Page/Contact/Contact';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/events">
              <Event></Event>
            </Route>
            <Route exact path="/contactUs">
              <Contact></Contact>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute exact path="/order/:serviceId">
              <Order></Order>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="/*">
              <NoteFound></NoteFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>



  );
}

export default App;
