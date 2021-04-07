import "./Phd.css";
import { phdData } from "./phdData";
import Sheng from "../assets/sheng.jpg";

function Phd() {
  return (
    <div>
      <div className="title">PhD Students</div>
      <div className="phd-container">
        {phdData.map((phd) => (
          <div className="phd-item-container">
            <br />
            <br />
            <a href={phd.website}>
              <img src={phd.img} className="profile-img" alt="prof-pic" />
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
