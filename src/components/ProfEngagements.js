import "./ProfEngagements.css";
import { awardData } from "./awardData";

function ProfEngagements() {
  return (
    <div>
      <div className="bio-title">Workshops</div>
      <div className="event-wrapper">
        <br />
        <a href="https://www.cs.umd.edu/users/samir/stoc2018/">
          TCS: Looking into the Future (Workshop to celebrate Vijay Vazirani's
          60th birthday as part of ACM STOC 2018).
        </a>
        <br />
        <br />
        <a href="https://www.cs.umd.edu/fnd2018">
          Flexible Network Design Workshop 2018 (University of Maryland).
        </a>
        <br />
        <br />
        <a href="https://www.cs.umd.edu/~samir/DCscheduling18/">
          Data Center Scheduling Workshop in Chicago.
        </a>
      </div>
      <div className="bio-title">Special Issues</div>
      <div className="event-wrapper">
        <br />
        <a href="http://www.cs.umd.edu/users/samir/ToCMotwani.htm">
          Call for Papers: &nbsp;
        </a>
        Rajeev Motwani: &nbsp;
        <a href="http://theoryofcomputing.org/articles/v008a002/">
          A Special Issue
        </a>
      </div>
      <div className="bio-title">Awards</div>
      <div className="alumni-container">
        <div className="event-wrapper">
        {awardData.map((award) => (
          <div>
            <div>{award}</div>
            <br/>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProfEngagements;
