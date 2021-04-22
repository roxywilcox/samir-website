import "./Teaching.css";
import { teachingData } from "./data/teaching_data";


function Teaching() {
  return (
    <div>
      <div className="teaching-title">Teaching</div>
      {teachingData.map((course) => (
        <div className="grid-container">
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
      <br/>
      <br/>
    </div>
  
  );
}

export default Teaching;
