import "./Undergrad.css";
import { undergradData } from "./undergradData";
import Sheng from "../assets/sheng.jpg";

function Undergrad() {
  return (
    <div>
    <div className="title">Undergraduate Students</div>
    <div className="container">
      {undergradData.map((undergrad) => (
        <div className="undergrad-container">
            {undergrad}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Undergrad;
