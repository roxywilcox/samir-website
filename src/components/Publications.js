import "./Publications.css";
import {publications} from "./data/publication_data";

function Publications() {
  return (
    <div>
      <div class="publications-container">
        <div className="pub-overall-wrapper">
          <div className="pub-title">Publications</div>
        </div>
        <br />
        {publications.map((pub) => { 

          
          const before = (
            <div name="before2000" id="before2000">
            <div  className="pub-wrapper">
              <b >{pub.year}</b>
              <br />
            </div>
            <div className="pub-wrapper">
              {pub.papers.map((title) => (
                <div>
                  <a className="pub-link" href={title.l}>{title.t}</a>
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <br />
          </div>
          );
          
          const after = (
            <div>
            <div className="pub-wrapper">
              <b>{pub.year}</b>
              <br />
            </div>
            <div className="pub-wrapper">
              {pub.papers.map((title) => (
                <div>
                  <a className="pub-link" href={title.l}>{title.t}</a>
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <br />
          </div>
          );
        
        return pub.year == 2000? before : after;
        })}
      </div>
      </div>
  );
}

export default Publications;
