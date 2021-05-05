import "./Bio.css";
import { awardData } from "./data/award_data";

function Bio() {
  return (
    <div className="samir-bio-container">
    <div>

      <div className="samir-bio-title">Biography</div>
      <br />
      <div className="samir-bio-text">
        Samir Khuller received his M.S and Ph.D from Cornell University in 1989
        and 1990, respectively, under the supervision of Vijay Vazirani. He
        spent two years as a Research Associate at the University of Maryland,
        before joining the Computer Science Department in 1992, where he was a
        Professor for 27 years. He spent several summers at the IBM T. J. Watson
        Research Center, and also visited the IBM Tokyo Research Lab for several
        weeks. From 2003 to 2008 he was the Associate Chair for Graduate
        Education. and he was the first Elizabeth Stevinson Iribe Chair for CS.
        As chair he led the development of the Brendan Iribe Center for Computer
        Science and Innovation, a project completed in March 2019. In March
        2019, Khuller joined Northwestern University as the Peter and Adrienne
        Barris Chair for CS.
      </div>
      <br />
      <div className="samir-bio-text">
        His research interests are in graph algorithms, discrete optimization,
        and computational geometry. He has published about 200 journal and
        conference papers, and several book chapters on these topics. He was an
        editor for the journal Algorithmica, and International Journal on
        Foundations of Computer Science, problems Editor for ACM Trans. on
        Algorithms, and currently is a columnist for SIGACT News and Associate
        Editor for Networks. He has served on several program committees
        including SODA 1997, APPROX 1999, APPROX 2000 (chair), STOC 2003, PODS
        2006, SODA 2007, APPROX 2010, ESA 2010, STOC 2013, SPAA 2017 and SODA
        2021. He served on the ESA Steering Committee from 2012-2016 and chaired
        the 2019 MAPSP Scheduling Workshop. From 2018-2021 he will serve as the
        Chair of SIGACT. In 2020, he received the CRA-E Undergraduate Research
        Mentoring Award.
      </div>
      <br />
      <div className="samir-bio-text">
        He received the National Science Foundation's Career Development Award,
        several Dept. Teaching Awards, the Dean's Teaching Excellence Award and
        also a CTE-Lilly Teaching Fellowship. In 2003, he and his students were
        awarded the "Best newcomer paper" award for the ACM PODS Conference. He
        received the University of Maryland's Distinguished Scholar Teacher
        Award in 2007, as well as a Google Research Award and an Amazon Research
        Award. In 2016, he received the European Symposium on Algorithms
        inaugural Test of Time Award for his work with Sudipto Guha on Connected
        Dominating Sets. He graduated at the top of the Computer Science Class
        from IIT-Kanpur.
      </div>
      <br />
      <div className="awards-container">
          <div className="awards-title">Awards</div>
          <br />
          {awardData.map((award) => (
            <div className="award-item">{award}</div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default Bio;
