import samirPic from "../assets/khuller-samir.jpg";
import "./NavBar.css";
import {NavDropdown, Nav, Navbar} from 'react-bootstrap';
import Alumni from "./Alumni";
import Phd from "./Phd";
import Undergrad from "./Undergrad";
import Home from "./Home";
import Teaching from "./Teaching";
import Workshops from "./Workshops";
import SpecialIssues from "./SpecialIssues";
import Publications from "./Publications";
import Talks from "./Talks";
import Bio from "./Bio";

function NavBar() {
  return (
    <div className="nav-bar-container">
    <div className="wrapper">
      <img src={samirPic} className="khuller-image" alt="kuller"/>
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
        {/* <Nav.Link href={Home}>Home</Nav.Link>
        <Nav.Link href={Teaching}>Teaching</Nav.Link> */}
        <NavDropdown title="Students" id="basic-nav-dropdown">
          <NavDropdown.Item href={Alumni}>Alumni</NavDropdown.Item>
          <NavDropdown.Item href={Bio}>PhD Students</NavDropdown.Item> 
          {/*<NavDropdown.Item href={Undergrad}>Undergraduate Researchers</NavDropdown.Item> */}
        </NavDropdown>
        {/* <NavDropdown title="Professional Engagements" id="basic-nav-dropdown">
          <NavDropdown.Item href={Workshops}>Workshops</NavDropdown.Item>
          <NavDropdown.Item href={SpecialIssues}>Special Issues</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href={Publications}>Publications</Nav.Link>
        <Nav.Link href={Talks}>Talks</Nav.Link>*/}
        {/* <Nav.Link href={Bio}>Bio</Nav.Link>  */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  
    
  );
}

export default NavBar;
