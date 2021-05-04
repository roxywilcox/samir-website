import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-title">Research Interests</div>
      <div className="blurb-container">
        <div className="blurb">
          My work is in the areas of Algorithm Design, specifically on
          graph algorithms, combinatorics, scheduling and approximation
          algorithms. Specifically, my research is motivated by algorithmic
          questions arising in the context of data storage, communication,
          clustering and load balancing. I have published widely on these areas,
          and have advised a number of graduate and undergraduate students who
          worked in these topics.
        </div>
      </div>
      <div className="home-title">Current Work</div>
      <div className="blurb-container">
        <div className="blurb">
          From 2003-2008, I was the Assoc. Chair for Graduate Studies in
          Computer Science at the University of Maryland, and then from
          2012-2017, I was the inaugural Elizabeth Iribe Chair for CS at
          University of Maryland. In 2019, I joined Northwestern Computer
          Science, a newly created independent Computer Science department,
          where I am currently the Peter and Adrienne Barris Chair for Computer
          Science and a Professor in the McCormick School of Engineering and
          Applied Science.
        </div>
      </div>
      <div className="home-title">Contact Me</div>
      <div className="contact-container">
        <div className="contact">
          2233 Tech Drive
          <br />
          Mudd Room 3017
          <br />
          Evanston, IL 60208-3109
          <br />
          <br />
          847-491-2748
          <br />
          <br />
          samir.khuller@northwestern.edu
        </div>
      </div>
    </div>
  );
}

export default Home;
