import "./ProfEngagements.css";
import { awardData } from "./awardData";
import Motwani from "../assets/motwani.jpg";
import Vjay from "../assets/vjay.jpg";
import Maryland from "../assets/maryland-logo.png";
import Logo from "../assets/logo-1.png";
import { talksData } from "./data/talks_data";

function ProfEngagements() {
  return (
    <div className="box">
      <div className="events-container">
      <div className="container">
          
            <img className="profile-img" src={Motwani} alt="Motwani"></img>
            <a
              className="event-link"
              href="http://www.cs.umd.edu/users/samir/ToCMotwani.htm"
            >
              <div>Call for Papers</div>
            </a>
            Rajeev Motwani
            <br />
            <a
              className="event-link"
              href="http://theoryofcomputing.org/articles/v008a002/"
            >
              A Special Issue
            </a>
         
        </div>

        <div className="container">
          <div>
            <a
              className="event-link"
              href="https://www.cs.umd.edu/users/samir/stoc2018/"
              >
              <img className="profile-img" src={Vjay} alt="Vjay"></img>
              <div>TCS: Looking into the Future </div>
            </a>
          </div>
        </div>
        
          <div className="container">
            <div>
              <a className="event-link" href="https://www.cs.umd.edu/fnd2018">
                <img
                  className="profile-img"
                  src={Maryland}
                  alt="Maryland"
                ></img>
                <div>Flexible Network Design Workshop 2018</div>
              </a>
            </div>
          </div>


        <div className="container">
          <div>
            <a
              className="event-link"
              href="https://www.cs.umd.edu/~samir/DCscheduling18/"
            >
              <img className="profile-img" src={Logo} alt="Logo"></img>
              <div>Data Center Scheduling Workshop</div>
            </a>
          </div>
        </div>

        </div>



        <div className="awards-container">
          <br />
          <h1>Awards</h1>
          {awardData.map((award) => (
            <ul>{award}</ul>
          ))}
        </div>
      </div>
  );
}

export default ProfEngagements;
