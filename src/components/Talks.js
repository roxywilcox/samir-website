import "./Talks.css";
import { talksData } from "./data/talks_data";

function Talks() {
  return (
    <div>
      <div className="title-wrapper">
        <div className="title">Talks</div>
        <br />
        {talksData.map((talk) => (
          <div className="pub-wrapper">
            <a href={talk.slides}>
              <div className="talk-title">{talk.title}</div>
            </a>

            <div className="talk-conference">{talk.conference}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Talks;
