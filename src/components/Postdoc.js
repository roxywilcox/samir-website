import "./Talks.css";
import { talksData } from "./data/talks_data";

function Postdoc() {
    // placeholder code
  return (
    <div className="talks-container">
        <div className="talks-title">Talks</div>
        <br />
        {talksData.map((talk) => (
          <div className="talk-wrapper">
            <a className="talk-link" href={talk.slides} download>
              <div className="talk-title">{talk.title}</div>
            </a>

            <div className="talk-conference">{talk.conference}</div>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Postdoc;