import "./Undergrad.css";
import { undergradData } from "./undergradData";
import Sheng from "../assets/sheng.jpg";

function Undergrad() {
  return (
    <div className="phd-container">
      {undergradData.map((phd) => (
        <div className="phd-item-container">
          <br />
          <br />
          <a href={phd.website}>
            <img src={Sheng} className="profile-img" alt="prof-pic" />
          </a>
          <br />
          <div className="phd-name">{phd.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Undergrad;
