import "./Undergrad.css";
import { undergradData } from "./undergradData";
import { undergradData2 } from "./undergradData2";
import Sheng from "../assets/sheng.jpg";

function Undergrad() {
  return (
    <div className="undergrad-container">
    <div className="title">Undergraduate Students</div>
    <div className="container">
      {undergradData.map((undergrad) => (
        <div className="undergrad-container">

            <div className="undergrad-img">{undergrad.img}</div>
            <div >{undergrad}</div>

        </div>
      ))}
    </div>
    <div className="container">
      {undergradData2.map((undergrad) => (
        <div className="undergrad-container">

            <div className="no-image">{undergrad}</div>

        </div>
      ))}
    </div>
    </div>
  );
}

export default Undergrad;
