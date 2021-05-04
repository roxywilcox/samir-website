import "./Teaching.css";
import { teachingData } from "./data/teaching_data";


function Teaching() {
  return (
    <div className="teaching-container">
      <div className="teaching-title">Teaching</div>
      <div className="grid-container">
        {teachingData.map((course) => (
          <div className="grid-item-container">
            <div className="grid-item">
              {course.year}
            </div>
            <div className="grid-item">
              <a href={course.link} className="course-link">
                {course.name}
              </a>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <br/>
    </div>
  
  );
}

export default Teaching;
