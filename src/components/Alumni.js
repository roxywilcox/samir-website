import Rajiv from "../assets/rajiv.jpg";
import Sheng from "../assets/sheng.jpg";
import Kanthi from "../assets/kanthi.jpg";
import Saeed from "../assets/saeed.jpeg";
import Saba from "../assets/saba.png";
import Koyel from "../assets/koyel.png";
import Ioana from "../assets/ioana.jpg";
import { alumniData } from "./alumniData";
import "./Alumni.css";

function Alumni() {
  console.log("this is the image", alumniData[0].img.default);
  return (
    <div>
      <div className="bio-title">Alumni</div>
      <div className="alumni-container">
        {alumniData.map((alumni) => (
          <div className="alumni-item-container">
            <a href={alumni.website}>
              <img src={alumni.img} className="profile-img" alt="prof-pic" />
            </a>
            <div className="alumni-name">{alumni.name}</div>
            <div className="alumni-paper">
              <i>{alumni.thesis}</i>
            </div>
            <div className="alumni-graduation">{alumni.graduation_date}</div>
            <div className="alumni-bio">{alumni.bio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
