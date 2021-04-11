import "./ProfEngagements.css";
import Motwani from "../assets/motwani.jpg";
import Vjay from "../assets/vjay.jpg";
import Maryland from "../assets/maryland-logo.png";
import Logo from "../assets/logo-1.png";
import { talksData } from "./data/talks_data";
import {profEngagementsData} from "./ProfEngagementsData";


function ProfEngagements() {
  return (
    <div>
      <div className="title">Workshops & Special Issues</div>
      <div className="phd-container">
        {profEngagementsData.map((e) => (
          <div className="phd-item-container">
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
