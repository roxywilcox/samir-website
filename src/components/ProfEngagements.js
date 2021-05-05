import "./ProfEngagements.css";
import {profEngagementsData} from "./data/prof_engagements_data";


function ProfEngagements() {
  return (
    <div className="prof-e-overall-container">
      <div className="prof-e-title">Workshops & Special Issues</div>
      <div className="prof-e-container">
        {profEngagementsData.map((e) => (
          <div className="prof-e-item-container">
            <br />
            <br />
            <a className="e-link" href={e.link}>
              <img src={e.img} className="prof-e-img" alt="prof-pic" />
            </a>
            <br />
            <br/>
            <a className="e-link" href={e.link}>
              <div className="e-name">{e.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProfEngagements;
