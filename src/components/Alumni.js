import Rajiv from "../assets/rajiv.jpg";
import Sheng from "../assets/sheng.jpg";
import Kanthi from "../assets/kanthi.jpg";
import Saeed from "../assets/saeed.jpeg";
import Saba from "../assets/saba.png";
import Koyel from "../assets/koyel.png";
import Ioana from "../assets/ioana.jpg";

import "./Alumni.css";

function Alumni() {
  return (
    <div className="alumni-container">
      <div className="wrapper">
        <div className="bio-title">Alumni</div>
        <br />

        <img src={Sheng} className="Sheng-image" alt="sheng" />
        <div className="year">
          Sheng Yang
        </div>
        <div className="paper">
          (Thesis Title: On Scheduling and Communication Issues in Data
          Centers), Ph.D (Dec 2020). Postdoc at Northwestern University.
        </div>
        <br />

        <img src={Ioana} className="Ioana-image" alt="ioana" />
        <div className="year">
          <a href="https://ioanabercea.github.io/webpage/">Ioana Bercea</a>
        </div>
        <div className="paper">
          (Thesis Title: Approximation Algorithms for Touring and Clustering
          Problems), Ph.D (July 2018). Postdoc at Tel-Aviv University (Israel).
        </div>
        <br />

        <div className="year">
          <a href="https://sites.google.com/view/manishpurohit/">
            Manish Purohit
          </a>
        </div>
        <div className="paper">
          (Thesis Title: Data-Aware Scheduling in Data Centers), Ph.D (May
          2016). Google Research (Mountain View).
        </div>
        <br />

        <img src={Kanthi} className="Kanthi-image" alt="kanthi" />
        <div className="year">
          <a href="http://www.cs.umd.edu/~kasarpa/redirect.html">
            Kanthi Sarpatwar
          </a>
        </div>
        <div className="paper">
          (Thesis Title: Allocation Algorithms for Networks with Scarce
          Resouces), Ph.D (May 2015). IBM T. J. Watson Research Center.
        </div>
        <br />

        <img src={Koyel} className="Koyel-image" alt="koyel" />
        <div className="year">Koyel Mukherjee</div>
        <div className="paper">
          (Thesis Title: Algorithmic Approaches to Reducing Resource Costs in
          Data Centers), Ph.D (Dec 2013). Xerox Research Center India
          (Bangalore).
        </div>
        <br />

        <div className="year">Jessica Chang</div>
        <div className="paper">
          (Thesis Title: Energy-Aware Batch Scheduling), Ph.D (U. Washington)
          (Aug 2013). Dept. of Defense.
        </div>
        <br />

        <img src={Saeed} className="Saeed-image" alt="saeed" />
        <div className="year">Saeed Alaei</div>
        <div className="paper">
          (Thesis Title: Mechanism design with general utilities), Ph.D (Aug
          2012). First position: Postdoc at Cornell University. Now at Google
          Research (Mountain View).
        </div>
        <br />

        <div className="year">
          <a href="http://www.cs.umd.edu/~barna/">Barna Saha</a>
        </div>
        <div className="paper">
          (Thesis Title: Approximation Algorithms for Resource Allocation),
          Ph.D. (Aug 2011). Best Paper Award at VLDB 2009. First job AT&T Labs.
          Now at U. Massachussets (Amherst).
        </div>
        <br />

        <div className="year">Jian Li</div>
        <div className="paper">
          (Thesis Title: Decision making under Uncertainty), Ph.D. (Aug 2011).
          Committee Chair - A.Deshpande. Best papers at ESA 2010/VLDB 2009.
          IIIS, Tsinghua University.
        </div>
        <br />

        <div className="year">
          <a href="https://sites.google.com/site/azarakhshm/">
            Azarakhsh Malekian
          </a>
        </div>
        <div className="paper">
          (Thesis Title: Combinatorial problems in online advertising), Ph.D.
          (Dec 2009). First job: Postdoc at Northwestern. Currently at U.
          Toronto.
        </div>
        <br />
        <div className="year">Srinivas Kashyap</div>
        <div className="paper">
          (Thesis Title: Algorithms for data placement, reconfiguration and
          monitoring in storage networks), Ph.D (Aug 2007). First job: Postdoc
          at IBM. Currently at Google.
        </div>
        <br />

        <div className="year">Julian Mestre</div>
        <div className="paper">
          (Thesis Title: Primal-Dual Algorithms for Combinatorial Optimization
          Problems), Ph.D (Aug 2007). Currently at U. Sydney. Best Student Paper
          Award (SODA 2008).
        </div>
        <br />

        <div className="year">
          <a href="http://www.cs.umd.edu/~ycwan/">Justin Wan</a>
        </div>
        <div className="paper">
          (Thesis Title: Algorithms for Data Dissemination and Collection), Ph.D
          (May 2005). PODS 2003 Best Newcomer Award. Currently at Google.
        </div>
        <br />

        <div className="year">Yoo Ah Kim</div>
        <div className="paper">
          (Thesis Title: Algorithms for Data Migration), Ph.D (June 2005). PODS
          2003 Best Newcomer Award. Currently at NIH.
        </div>
        <br />

        <div className="year">Michael Roberts</div>
        <div className="paper">
          (Thesis Title: A preprocessor for shotgun assembly of large genomes),
          Ph.D (2003). Work done under Jim Yorke's supervision.
        </div>
        <br />

        <img src={Rajiv} className="Rajiv-image" alt="rajiv" />
        <div className="year">
          <a href="http://www.crab.rutgers.edu/~rajivg/">Rajiv Gandhi</a>
        </div>
        <div className="paper">
          (Thesis Title: Broadcast Scheduling), Ph.D (May 2003). Currently at
          Rutgers University (Camden). Winner of a Fulbright, and several
          teaching awards.
        </div>
        <br />

        <div className="year">Yoram Sussmann</div>
        <div className="paper">
          (Thesis Title: Approximation Algorithms for Facility Location
          Problems), Ph.D (Feb 1999). Currently at Iona College (New York).
        </div>
        <br />

        <div className="year">Randeep Bhatia</div>
        <div className="paper">
          (Thesis Title: Approximation Algorithms for Scheduling Problems), Ph.D
          (August 1998). Currently at Bell Labs, NJ.
        </div>
        <br />
      </div>
    </div>
  );
}

export default Alumni;
