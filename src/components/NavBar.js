import samirPic from "../assets/khuller-samir.jpg";
import "./NavBar.css";
import { NavDropdown} from "react-bootstrap";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="title-card-container">
        <div className="nav-bar-header-wrapper">
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
        <a href="/">Home</a>
        <a href="/teaching">Teaching</a>
        <NavDropdown title="Students" id="basic-nav-dropdown">
          <NavDropdown.Item className="dropdown-item" href="/alumni">Alumni</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/phd">PhD Students</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/undergrad">Undergraduates</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/postdoc">Postdocs</NavDropdown.Item>
        </NavDropdown>
        <a href="/profEngagements">Professional Engagements</a>
        {/* <a href="/publications">Publications</a> */}
        <NavDropdown title="Publications" id="basic-nav-dropdown">
          <NavDropdown.Item className="dropdown-item" href="/publications#before2000">Before 2000</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/publications">After 2000</NavDropdown.Item>
        </NavDropdown>
        <a href="/talks">Talks</a>
        {/* <a href="/bio">Biography</a> */}
        <NavDropdown title="About" id="basic-nav-dropdown">
          <NavDropdown.Item className="dropdown-item" href="/bio">Biography</NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item" href="/bio#awards">Awards</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
}

export default NavBar;
