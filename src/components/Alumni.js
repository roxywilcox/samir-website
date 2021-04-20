
import { alumniData } from "./data/alumni_data";
import "./Alumni.css";

function Alumni() {
  return (
    <div>
      <div className="title">
        Alumni
      </div>
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
