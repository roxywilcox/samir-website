import "./Phd.css";
import { phdData } from "./data/phd_data";

function Phd() {
  return (
    <div className="phd-overall-container">
      <div className="phd-title">PhD Students</div>
      <div className="phd-container">
        {phdData.map((phd) => (
          <div className="phd-item-container">
            <br />
            <br />
            <a href={phd.website}>
              <img src={phd.img} className="phd-profile-img" alt="prof-pic" />
            </a>
            <br />
            <br/>
            <br/>
            <div className="phd-name">{phd.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phd;
