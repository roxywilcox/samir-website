import "./Publications.css";
import { publications } from "./data/publication_data";

function Publications() {
  return (
    <div>
      <div class="publications-container">
        <div className="title-wrapper">
          <div className="title">Publications</div>
        </div>
        <br />
        {publications.map((pub) => (
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
        ))}
      </div>
      <a href="/pdf">pdf</a>
      <br/>
      <a href="sample2.pdf" download>pdf2</a>
      
    </div>
  );
}

export default Publications;
