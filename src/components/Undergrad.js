import "./Undergrad.css";
import { undergradData } from "./data/undergrad_data";

function Undergrad() {
  return (
    <div>
      <div className="undergrad-title">Undergraduate Researchers</div>

      <div className="u-container">
        {undergradData.map((undergrad) => (
          <div className="u-item-container">
            <br />
            <br />
            <img className="pictured" src={undergrad.img} alt="prof-pic" />
            <br />
            <br />
            <div className="u-name">{undergrad.name}</div>
          </div>
        ))}
      </div>
      <br />
      <div className="undergrad-wrapper">
        <div>
          Not pictured: An Zhu, Srinivas Kashyap, Colin Dixon, Jessica Chang,
          Mitchell Katz, Matt McCutchen, Philip Anderson, Deonna Hodges, Naomi
          Wilcox, Alexa Greenberg, Aboli Kumthekar, Chunxing Yin, Megan Chao,
          Riley Murray, Katherine Scola, Ben Eggers, Prayaag Venkat, Kevin Sun,
          Pascal Sturmfels, Jingling Li, Tu Luan, Xi Chen, Frederic Koehler, Sam
          Estep, Laurel Newman, Ariel Fromm, Galen Stetsyuk, Mikhail Sorokin,
          Raghav Gupta.
          {/* Not pictured: An Zhu Ph.D (Stanford) (Honors Thesis Title: A Uniform
          Framework for Weighted Connectivity Problems (Dorfman Award)). Winner
          of a Bell Labs fellowship,NSF fellowship. Currently at Google.,
          Srinivas Kashyap Ph.D (Maryland) (Honors Thesis Title: Algorithms for
          Non-Uniform Size Data Placement for Parallel Disks.) Currently at
          Google., Svetlana Shargorodskaya (Honors Thesis Title: Implementation
          of Data Migration Algorithms), Colin Dixon Ph.D. (Washington) (Honors
          Thesis Title: Vertex Cover Problem with Hard Capacities) Currently at
          IBM., Jessica Chang Ph.D. (Washington) (Honors Thesis Title: Online
          Broadcast Scheduling: minimizing the maximum response time . NSF
          Graduate Fellowship. Phillip Merrill Scholarship and Honorable mention
          for the CRA Outstanding Undergraduate Award. Currently at University
          of Washington., Allie Hoch (undergrad) (Honors Thesis Title: On
          finding densest subgraphs and their applications). CRA Award
          (Honorable Mention). Winner of NSF Graduate fellowship. Joining UC
          Berekeley., Mitchell Katz (Google), Matt McCutchen (undergrad) (Honors
          Thesis Title: Streaming algorithms for k-center clusterings with
          outliers and anonymity). CRA Award for top undergraduate in 2010.
          Winner of Dorfman prize for undergraduate research and Stewart
          Research Award from the CS Dept. Currently doing his Ph.D. at MIT.,
          Philip Anderson (undergrad) Joint with Louiqa Raschid., Elissa
          Redmiles (undergrad). CRA Award (Honorable Mention). Currently doing
          her Ph.D. at UMD., Deonna Hodges (FactSet), Naomi Wilcox (AOL), Alexa
          Greenberg (Google), Aboli Kumthekar (Appian), Chunxing Yin. Currently
          a graduate student at Georgia Tech., Megan Chao (MIT), Riley Murray
          (UC Berkeley). Currently a Ph.D. student at CalTech., Katherine Scola
          (Rutgers (Camden)). Currently a Ph.D. student at UMD., Ben Eggers (U.
          Washington). Applying to graduate school., Prayaag Venkat (UMD). Ph.D
          student at Harvard University., Kevin Sun (Rutgers). Ph.D. student at
          Duke., Pascal Sturmfels (U. Michigan). Ph.D. student at U.
          Washington., Jingling Li (Bryn Mawr College). Ph.D. student at UMD.,
          Tu Luan (Bryn Mawr). Ph.D. student at UMD., Xi Chen (UMD). Currently a
          graduate student at Georgia Tech., Frederic Koehler (Princeton). Now a
          graduate student at MIT., Sam Estep, Laurel Newman, Ariel Fromm, Galen
          Stetsyuk, Mikhail Sorokin, Raghav Gupta */}
        </div>

        {/* {undergradData2.map((undergrad) => (
        <div >

            <div className="no-image">{undergrad}</div>

        </div>
      ))} */}
        <br />
        <br />

      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Undergrad;
