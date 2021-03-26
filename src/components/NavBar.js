import samirPic from "../assets/khuller-samir.jpg";
import "./NavBar.css";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="wrapper">
        <img src={samirPic} className="khuller-image" alt="kuller" />
        <div className="title-wrapper">
          <div className="name">Samir Khuller</div>
          <div className="position1">
            Peter and Adrienne Barris Chair of Computer Science
          </div>
          <div className="position2">Professor of Computer Science</div>
          <div className="school">Northwestern University</div>
        </div>
      </div>
      <Navbar expand="lg" variant="dark" className="top-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Students" id="basic-nav-dropdown">
              <NavDropdown.Item href="/alumni">Alumni</NavDropdown.Item>
              <NavDropdown.Item href="/bio">PhD Students</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
