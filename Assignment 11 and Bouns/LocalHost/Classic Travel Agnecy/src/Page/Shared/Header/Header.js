import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
//import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  return (
    <div className="">
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
        <Container >
          <Nav.Link as={Link} to="/home"><h3>Classic Travel Agency</h3></Nav.Link>
          {/* <Nav.Link className='text-dark' ><Link id='menu-items' to="/home"> <h3>Classic Travel Agency</h3> </Link></Nav.Link> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/services">Tour Package</Nav.Link>
            <Nav.Link as={Link} to="/events">Our Events</Nav.Link>
            <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>

            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <Navbar.Text className=""><Nav.Link href="#login">{user?.displayName}</Nav.Link></Navbar.Text>
              <NavDropdown.Item as={Link} to="/myOrders">My Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/manageOrders">Manage All Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/addServices">Add a new services</NavDropdown.Item>

            </NavDropdown>
            {
              user?.email ?
                <Button onClick={logOut} variant="primary">Logout</Button> :
                <Nav.Link as={Link} to="/login"><Button variant="primary">Login</Button></Nav.Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};









// const Header = () => {

//   const { user, logOut } = useAuth()

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item mx-3">
//               <Link to="/home">Home</Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link to="/services">Services</Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link to="/private-one">My Private 1</Link>
//             </li>

//             {

//               user.email ?
//                 <button onClick={logOut}> Sign Out</button>
//                 :
//                 <li className="nav-item mx-3">
//                   <Link to="/login">Login</Link>
//                 </li>
//             }
//             <p>Name: {user?.displayName}</p>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Header;