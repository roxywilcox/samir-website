import samirPic from "../assets/khuller-samir.jpg";
import "./NavBar.css";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="title-card-container">
        <div className="nav-bar-wrapper">
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
      </div>
      <div className="nav">
        <a href="/home">Home</a>
        <a href="/teaching">Teaching</a>
        <NavDropdown title="Students" id="basic-nav-dropdown">
          <NavDropdown.Item className="dropdown-item" href="/alumni">Alumni</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/phd">PhD Students</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/undergrad">Undergraduates</NavDropdown.Item>
        </NavDropdown>
        <a href="/profEngagements">Professional Engagements</a>
        <a href="/publications">Publications</a>
        <a href="/talks">Talks</a>
        <a href="/bio">Bio</a>
      </div>
      {/* <Navbar expand="lg" variant="dark" className="top-nav justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" id="nav-container">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/teaching">Teaching</Nav.Link>
            <NavDropdown title="Students" id="basic-nav-dropdown">
              <NavDropdown.Item href="/alumni">Alumni</NavDropdown.Item>
              <NavDropdown.Item href="/phd">PhD Students</NavDropdown.Item>
              <NavDropdown.Item href="/undergrad">Undergraduates</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/profEngagements">Professional Engagements</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <Nav.Link href="/talks">Talks</Nav.Link>
            <Nav.Link href="/bio">Bio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}

export default NavBar;
