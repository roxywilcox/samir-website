import "./Postdoc.css";
import { postdocData } from "./data/postdoc_data";

function Postdoc() {
  return (
    <div className="postdoc-overall-container">
      <div className="postdoc-title">Postdocs</div>
      <div className="postdoc-container">
        {postdocData.map((postdoc) => (
          <div className="postdoc-item-container">
            <br />
            <br />
            <a href={postdoc.website}>
              <img src={postdoc.img} className="postdoc-profile-img" alt="prof-pic" />
            </a>
            <br />
            <br/>
            <br/>
            <div className="postdoc-name">{postdoc.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Postdoc;
