// // import React, { useEffect, useState } from 'react';
// // const NavBar = () => {
// //   const [state, setState] = useState(null);
// //   useEffect(() => {
// //     // Логика, которая выполняется после монтирования компонента
// //     return () => {
// //       // Логика, которая выполняется перед удалением компонента
// //     };
// //   }, []);
// //   return (
// //     <div>
// //       <ul className="nav">
// //   <li className="nav-item">
// //     <a className="nav-link active" aria-current="page" href="#">Active</a>
// //   </li>
// //   <li className="nav-item">
// //     <a className="nav-link" href="#">Link</a>
// //   </li>
// //   <li className="nav-item">
// //     <a className="nav-link" href="#">Link</a>
// //   </li>
// //   <li className="nav-item">
// //     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
// //   </li>
// // </ul>
// //     </div>
// //   );
// // };
// // export default NavBar;

// import React from "react";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//     return (
//         <ul className="nav">
//             <li className="nav-item">
//                 <Link className="nav-link " aria-current="page" to="/">
//                     Main
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link " aria-current="page" to="/login">
//                     Login
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link " aria-current="page" to="/users">
//                     Habits
//                 </Link>
//             </li>
//         </ul>
//     );
// };

// export default NavBar;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-check" viewBox="0 0 16 16">
  <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Главная</Nav.Link>
          <Nav.Link as={Link} to="/about">Профиль</Nav.Link>
          <Nav.Link as={Link} to="/login">Авторизация</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;