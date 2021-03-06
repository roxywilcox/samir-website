import Greedy from "../../assets/greedy.ps";
import PCharles from "../../assets/pcharles.pdf";
import SabaPaper from "../../assets/sabapaper.pdf";
import Esa from "../../assets/esa.ps";
import Kkw from "../../assets/kkw.ps";
import a2004 from "../../assets/2004-1.ps";
import b2004 from "../../assets/2004-2.ps";
import c2004 from "../../assets/2004-3.ps";
import a2003 from "../../assets/renars.ps";
import b2003 from "../../assets/orl.ps";
import c2003 from "../../assets/esa03.ps";
import d2003 from "../../assets/fsttcs03.ps";
import e2003 from "../../assets/approx03.ps";
import f2003 from "../../assets/icalp03.ps";
import g2003 from "../../assets/infocom03.ps";
import h2003 from "../../assets/bkkbk.ps";
import i2003 from "../../assets/kkw03.ps";
import a2002 from "../../assets/iwcw.ps";
import b2002 from "../../assets/ipco02.ps";
import c2002 from "../../assets/focs02.ps";
import d2002 from "../../assets/kz02.ps";
import e2002 from "../../assets/ghko02.ps";
import f2002 from "../../assets/zk02.ps";
import a2001 from "../../assets/z.ps";
import b2001 from "../../assets/icalp01.ps";
import c2001 from "../../assets/bk01.ps";
import d2001 from "../../assets/outlier.pdf";
import e2001 from "../../assets/secure.ps";
import a2000 from "../../assets/gkktz2000.ps";
import b2000 from "../../assets/kbp2000.ps";
import c2000 from "../../assets/krw98.ps";
import d2000 from "../../assets/bistro.ps";
import a1999 from "../../assets/bkps99.ps";
import b1999 from "../../assets/krz99.ps";
import c1999 from "../../assets/khuller99.ps";
import d1999 from "../../assets/kmn97.ps";
import a1998 from "../../assets/elections.pdf";
import b1998 from "../../assets/ghkr98.ps";
import c1998 from "../../assets/ckr98.ps";
import d1998 from "../../assets/gk98.ps";
import e1998 from "../../assets/bgks97.ps";
import f1998 from "../../assets/gk98b.ps";
import a1997 from "../../assets/kps97.ps";
import a1996 from "../../assets/beacons.ps";
import b1996 from "../../assets/ks96.ps";
import c1996 from "../../assets/gk96.ps";
import d1996 from "../../assets/fkkry96.ps";
import a1995 from "../../assets/vital.ps";
import b1995 from "../../assets/cp95.ps";
import c1995 from "../../assets/kr95.ps";
import d1995 from "../../assets/bkn95.ps";
import e1995 from "../../assets/krr95.ps";
import a1994 from "../../assets/con.ps";
import b1994 from "../../assets/kry94b.ps";
import c1994 from "../../assets/kry94a.ps";
import a1993 from "../../assets/lattice.pdf";
import b1993 from "../../assets/kry93b.ps";
import c1993 from "../../assets/kry93a.ps";
import d1993 from "../../assets/ipco94.pdf";
import a1992 from "../../assets/tree.pdf";
import b1992 from "../../assets/stoc92.pdf";
import c1992 from "../../assets/aug.pdf";
import b1991 from "../../assets/icalp91.pdf";
import c1991 from "../../assets/cp.pdf";
import d1991 from "../../assets/self.pdf";
import a1990 from "../../assets/flow.pdf";
import c1990 from "../../assets/tri.pdf";
import a1989 from "../../assets/wads89.pdf";
import c1989 from "../../assets/focs89b.pdf";

export const publications = [
  {
    year: "2020",
    papers: [
      {
        t: "P. Chalermsook, S. Khuller, P. Sukprasert, S. Uniyal. Multi-transversals for Triangles and the Tuza Conjecture. SODA 2020.",
        l: PCharles,
      },
      {
        t: "S. Ahmadi, F. Ahmed, J. Dickerson., M. Fuge and S. Khuller. An Algorithm for Multi-Attribute Diverse Matching. IJCAI 2020.",
        l: SabaPaper,
      },
      {
        t: "A Pairwise Fair and Community-preserving Approach to k-Center Clustering. ICML 2020.",
        l: "http://proceedings.mlr.press/v119/brubach20a.html",
      },
      {
        t: "Analyzing the Optimal Neighborhood: Algorithms for Partial and Budgeted Connected Dominating Set Problems. SIAM J. Discret. Math.",
        l: "https://epubs.siam.org/doi/10.1137/18M1212094",
      },
      {
        t: "On Scheduling Coflows. Algorithmica.",
        l: "https://link.springer.com/article/10.1007/s00453-020-00741-3",
      },
    ],
  },

  {
    year: "2019",
    papers: [
      {
        t: "S. Ahmadi, S. Khuller and B. Saha. Min-Max Correlation Clustering via MultiCut. IPCO 2019.",
        l: "http://www.cs.umd.edu/users/samir/grant/IPCO2019.pdf",
      },
      {
        t: "I. Bercea, M. Gross, S. Khuller, A. Kumar, C. Rosner, D. Schmidt and M. Schmidt. On the cost of essentially fair clusterings. APPROX 2019.",
        l: "http://www.cs.umd.edu/users/samir/grant/APPROX2019.pdf",
      },
      {
        t: "M. Chowdhury, S. Khuller, M. Purohit, S. Yang, J. You. Near optimal coflow scheduling in networks. SPAA 2019.",
        l: "http://www.cs.umd.edu/users/samir/grant/SPAA2019.pdf",
      },
    ],
  },
  {
    year: "2018",
    papers: [
      {
        t: "M. Sorokin, G. Stetsyuk, B. Russin, S, Khuller, C. Paul. Ring Graphs in Virtual Reality: Exploring a New and Novel Method for Node Placement and Link Visibility in VR-Based Graph Analysis. SIGGRAPH Asia (poster+demo).",
      },
      {
        t: "S. Khuller, J. Li, P. Sturmfels, K. Sun and P. Venkat. Select and Permute: An Improved Online Framework for Scheduling to Minimize Weighted Completion Time . LATIN 2018. Accepted to Theoretical Computer Science.",
        l: "http://www.cs.umd.edu/users/samir/grant/cos-latin.pdf",
      },
      {
        t: "S. Kumar, S. Khuller. Brief Announcement: A Greedy 2 approximation algorithm for the active time problem SPAA 2018.",
        l: "http://www.cs.umd.edu/users/samir/grant/spaa18.pdf",
      },
      {
        t: "S. Grover, N. Gupta, S. Khuller A. Pancholi. Constant factor approximation algorithm for uniform hard capacitated knapsack median problem FST&TCS 2018. Submitted for journal publication.",
        l: "http://www.cs.umd.edu/users/samir/grant/fsttcs2018.pdf",
      },
    ],
  },
  {
    year: "2017",
    papers: [
      {
        t: "S. Khuller, F. Koehler. BusyTime Scheduling: Online and Offline Algorithms 2017 WADS.",
        l: "http://www.cs.umd.edu/users/samir/grant/wads17.pdf",
      },
      {
        t: "S. Ahmadi, S. Khuller, M. Purohit and S. Yang. On Scheduling Co-Flows. To appear in Integer Programming and Combinatorial Optimization (IPCO), 2017. Full version accepted to Algorithmica.",
        l: "http://www.cs.umd.edu/users/samir/grant/ipco2017.pdf",
      },
    ],
  },
  {
    year: "2016",
    papers: [
      {
        t: "S. Khuller, M. Purohit. Brief Announcement: Improved approximation algorithms for scheduling co-flows. SPAA 2016.",
        l: "http://www.cs.umd.edu/users/samir/grant/spaa16.pdf",
      },
      {
        t: "R. Murray, M. Chao and S. Khuller. Scheduling distributed clusters of parallel machines: primal dual and LP based approximation algorithms. ESA 2016. Full version Algorithmica.",
        l: "http://www.cs.umd.edu/users/samir/grant/esa2016.pdf",
      },
      {
        t: "I. Bercea, V. Isler, S. Khuller. Minimizing Uncertainty through Sensor Placement with Angle Constraints. CCCG 2016.",
        l: "http://www.cs.umd.edu/users/samir/grant/CCCG2016.pdf",
      },
      {
        t: "S. Khuller, S. Yang. Revisiting Connected Dominating Sets: An optimal local algorithm? APPROX 2016. Full version to appear in Algorithmica.",
        l: "http://www.cs.umd.edu/users/samir/grant/approx2016.pdf",
      },
    ],
  },
  {
    year: "2015",
    papers: [
      {
        t: "H. Daume, S. Khuller, M. Purohit, G. Sanders. On correcting inputs: Inverse optimization with a margin. FST&TCS 2015.",
        l: "http://www.cs.umd.edu/users/samir/grant/FSTTCS2016.pdf",
      },
    ],
  },
  {
    year: "2014",
    papers: [
      {
        t: "S. Khuller, M. Purohit, K. K. Sarpatwar. Analyzing the Optimal Neighborhood: Algorithms for Partial and Budgeted Connected Dominating Set Problems. 2014 SODA. Full version submitted to SIAM Journal on Discrete Math.",
        l: "http://www.cs.umd.edu/users/samir/grant/pcds.pdf",
      },
      {
        t: "J. Chang, S. Khuller, K. Mukherjee. LP Rounding and Combinatorial Algorithms for minimizing active and busy time. 2014 SPAA. Full version to appear in Special Issue of Journal of Scheduling.",
        l: "http://www.cs.umd.edu/users/samir/grant/spaa14.pdf",
      },
      {
        t: "S. Arora, N. Gupta, S. Khuller, Y. Sabharwal and S. Singhal. Facility Location with red-blue demands. Operations Research Letters 42 (6-7): 462-465 (2014).",
      },
    ],
  },
  {
    year: "2013",
    papers: [
      {
        t: "F. Koehler and S. Khuller. Optimal batch schedules for parallel machines. 2013 WADS.",
        l: "http://www.cs.umd.edu/users/samir/grant/sched-wads.pdf",
      },
      {
        t: "K. Mukherjee, S. Khuller, A. Deshpande. Algorithms for the Thermal Scheduling Problem. 2013 IPDPS.",
        l: "http://www.cs.umd.edu/users/samir/grant/ipdps13.pdf",
      },
      {
        t: "L. Golubchik, S. Khuller, K. Mukherjee and Y. Yao. To send or not to send: Reducing the cost of data transmission. 2013 INFOCOM.",
        l: "http://www.cs.umd.edu/users/samir/grant/infocom13.pdf",
      },
      {
        t: "J. Chang and S. Khuller. A Min-Edge Cost Flow Framework for Capacitated Covering Problems. ALENEX 2013.",
        l: "http://www.cs.umd.edu/users/samir/grant/alenex2013.pdf",
      },
      {
        t: "A. K. Kayyoor, A. Deshpande and S. Khuller. Data Placement and Replica Selection for Improving Co-location in Distributed Environments.",
      },
    ],
  },
  {
    year: "2012",
    papers: [
      {
        t: "K. Mukherjee, S. Khuller, A. Deshpande. Saving on Cooling: The Thermal Scheduling Problem. SIGMETRICS 2012 (poster).",
        l: "http://www.cs.umd.edu/users/samir/grant/sigmetrics_abstract.pdf",
      },
      {
        t: "B.Saha and S. Khuller. Set Cover revisited: Hypergraph Cover with Hard Capacities. ICALP 2012. A more complete version.",
        l: "http://www.cs.umd.edu/users/samir/grant/icalp12.pdf",
      },
      {
        t: "J. Chang, H. Gabow and S. Khuller. A model for minimizing active processor time. ESA 2012. Full version to appear in special issue of Algorithmica",
        l: "http://www.cs.umd.edu/users/samir/grant/esa12.pdf",
      },
      {
        t: "S. Khuller, B. Saha and K. K. Sarpatwar. New Approximation Results for Resource Replication Problems. APPROX 2012. Full version in Algorithmica.",
        l: "http://www.cs.umd.edu/users/samir/grant/approx12.pdf",
      },
      {
        t: "G. Duggal, R. Patro, E. Sefer, H. Wang, D. Filippova, S. Khuller and C. Kingsford. Resolving Spatial Inconsistencies in Chromosome Conformation Data. WABI 2012. Invited to special issue of BMC from WABI.",
        l: "http://www.cs.umd.edu/users/samir/grant/wabi12.pdf",
      },
      {
        t: "M. Cygan, M.T. Hajiaghayi and S. Khuller. LP Rounding for $k$-Centers with Non-uniform Hard Capacities. FOCS 2012.",
        l: "http://www.cs.umd.edu/users/samir/grant/focs12.pdf",
      },
    ],
  },
  {
    year: "2011",
    papers: [
      {
        t: "A. Thor, P. Anderson, L. Raschid, S. Navlakha, B. Saha, S. Khuller, X. Zhang. Link Prediction for Annotation Graph Datasets using Graph Summarization. 2011 Int. Semantic Web Conference, Bonn.",
        l: "http://www.cs.umd.edu/users/samir/grant/lppdabw.pdf",
      },
      {
        t: "J. Li and S. Khuller. Generalized Machine Activation Problems. SODA 2011.",
      },
    ],
  },
  {
    year: "2010",
    papers: [
      {
        t: "C. Chekuri, A. Gal, S. Im, S. Khuller, J. Li, R. McCutchen, B. Moseley and L. Raschid. New Models and Algorithms for Throughput Maximization in Broadcast Scheduling WAOA 2010.",
        l: "http://www.cs.umd.edu/users/samir/grant/waoabroadcast.pdf",
      },
      {
        t: "E. Bortnikov, S. Khuller, J.Li, Y. Mansour and S. Naor. The Load-Distance Balancing Problem. To appear Special Issue of Networks from INOC 2009.",
        l: "http://www.cs.umd.edu/users/samir/grant/loaddis_NETWORKS.pdf",
      },
      {
        t: "S. Khuller, J. Li and B. Saha. Energy efficient scheduling via partial shutdown. SODA 2010.",
        l: "http://www.cs.umd.edu/users/samir/grant/soda10.pdf",
      },
      {
        t: "S. Khuller and J. Chang. How many places to apply to and how many to accept? Submitted for publication.",
      },
      {
        t: "J. Li, A. Deshpande and S. Khuller. On Computing Compression Trees for Data Collection in Wireless Sensor Networks. INFOCOM 2010 .",
        l: "http://www.cs.umd.edu/users/samir/grant/infocom10.pdf",
      },
      {
        t: "A. Deshpande, S. Khuller and A. Srivastava. A case for spatially-aware optmization in data centers Submitted.",
        l: "",
      },
      {
        t: "B. Saha, A. Hoch, S. Khuller, L. Raschid and X. Zhang. Dense Subgraphs with Restrictions and Applications to Gene Annotation Graphs. RECOMB 2010.",
        l: "http://www.cs.umd.edu/users/samir/grant/recomb10.pdf",
      },
    ],
  },
  {
    year: "2009",
    papers: [
      {
        t: "S. Khuller and B. Saha. On finding dense subgraphs. ICALP 2009. Journal submission.",
        l: "http://www.cs.umd.edu/users/samir/grant/icalp-final.pdf",
      },
      {
        t: "S. Alaei, E. Arcaute, S. Khuller, W. Ma, A. Malekian and J. Tomlin Online Allocation of Display Advertisements Subject to Advanced Sales Contracts}. 2009 Workshop on Data Mining and Audience Intelligence for Advertising.",
        l: "http://www.cs.umd.edu/users/samir/grant/adkdd.pdf",
      },
      {
        t: "E. Bortnikov, S. Khuller, Y. Mansour and S. Naor. The Load-Distance Balancing Problem. 2009 International Network Optimization Conference (INOC) .",
        l: "http://www.cs.umd.edu/users/samir/grant/inoc.pdf",
      },
      {
        t: "J. Li, A. Deshpande and S. Khuller. Minimizing communication cost in distributed multi-query processing. 2009 International Conference on Data Engineering (ICDE) (Shanghai).",
        l: "http://www.cs.umd.edu/users/samir/grant/icde09.pdf",
      },
      {
        t: "A. Chow, L. Golubchik, S. Khuller and Y. Yao. On the tradeoff between playback delay and buffer space in streaming. 2009 IPDPS (Rome, Italy).",
      },
    ],
  },
  {
    year: "2008",
    papers: [
      {
        t: "S. Khuller and J. Mestre. An Optimal Incremental Algorithm for Minimizing Lateness with Rejection 2008 European Symposium on Algorithms (ESA). Submitted for publication Journal.",
        l: "http://www.cs.umd.edu/users/samir/grant/esa08.pdf",
      },
      {
        t: "R. McCutchen and S. Khuller. Streaming algorithms for $k$-center clustering with outliers and with anonymity 2008 Workshop on Approximation Algorithms (APPROX).",
        l: "http://www.cs.umd.edu/users/samir/grant/approx08.pdf",
      },
      {
        t: "J. Chang, T. Erlebach, R. Gailis and S. Khuller. Broadcast Scheduling: Algorithms and Complexity. 2008 Symp. on Discrete Algorithms (SODA) . To appear in ACM Trans. on Algorithms.",
        l: "http://www.cs.umd.edu/users/samir/grant/soda-final-edited.pdf",
      },
      {
        t: "A. Deshpande, S. Khuller, A. Malekian and M. Toossi. Energy Efficient Monitoring in Sensor Networks. LATIN 2008. Invited to special issue of Algorithmica.",
        l: "http://www.cs.umd.edu/users/samir/grant/latin-jo.pdf",
      },
    ],
  },
  {
    year: "2007",
    papers: [
      {
        t: "S. Khuller, A. Malekian and J. Mestre. The Gas Station Problem. 2007 European Symp. on Algorithms (ESA). To appear in ACM Trans. on Algorithms.",
        l: "http://www.cs.umd.edu/users/samir/grant/gas-j.pdf",
      },
      {
        t: "S. Khuller, M. Martinez, D. Nau, G. Simari, A. Sliva, V.S. Subrahmanian. Finding most probable worlds of probabilistic logic programs. SUM 2007 . Full version in Ann. Math. Artificial Intelligence (2007).",
      },
    ],
  },
  {
    year: "2006",
    papers: [
      {
        t: "S. Kashyap, S. Khuller, Y-C. Wan and L. Golubchik. Fast Reconfiguration of Data Placement in Parallel Disks. 2006 ALENEX.",
        l: "http://www.cs.umd.edu/users/samir/grant/alenex06.pdf",
      },
      {
        t: "M. Charikar and S. Khuller. A robust maximum completion time measure for scheduling. 2006 Symp. on Discrete Algorithms (SODA).",
      },
      {
        t: "J. Bleiholder, S. Khuller, F. Naumann, L. Raschid and Y. Wu. Query Planning in the presence of overlapping sources. EDBT (2006).",
        l: "http://www.cs.umd.edu/users/samir/grant/edbt06.pdf",
      },
      {
        t: "A. Kashyap, S. Khuller and M. Shayman. Relay placement for higher order connectivity in sensor networks. INFOCOM (2006). Submitted for journal publication.",
        l: "http://www.cs.umd.edu/users/samir/grant/alenex06.pdf",
      },
      {
        t: "G. Aggarwal, T. Feder, K. Kenthapadi, S. Khuller, R. Panigrahy, D. Thomas and A. Zhu. Achieving anonymity via clustering. 2006 Principles of Database Systems (PODS). Full version Accepted to ACM Trans. on Algorithms.",
      },
      {
        t: "S. Khuller, Y-A. Kim, A.Malekian. Improved algorithms for Data migration. 2006 Workshop on Approximation Algorithms (APPROX). Full version accepted to Algorithmica.",
      },
    ],
  },
  {
    year: "2005",
    papers: [
      {
        t: "S. Khuller, B. Raghavachari and N. Young. Greedy Methods. Book Chapter.",
        l: Greedy,
      },
      {
        t: "S. Khuller, K. Lee and M. Shayman. On Degree Constrained Shortest Paths. 2005 European Symp. on Algorithms (ESA).",
        l: Esa,
      },
      {
        t: "S. Khuller, B. Raghavachari and N. Young. Greedy Methods. Book Chapter.",
        l: Kkw,
      },
    ],
  },
  {
    year: "2004",
    papers: [
      {
        t: "L. Golubchik, S. Khuller, Y. Kim, S. Shargorodksaya and Y-C. Wan. Data migration on parallel disks. 2004 European Symp. on Algorithms (ESA). Full version in special Issue of Algorithmica from ESA 2004.",
        l: a2004,
      },
      {
        t: "S. Khuller, Y. Kim and G. Woeginger. A polynomial time approximation scheme for broadcasting in heterogenous networks. APPROX 2004. Full version in Algorithmica, Vol 48(1):1--21 (2007)(merged with SODA 2004 paper).",
        l: b2004,
      },
      {
        t: "S. Khuller and Y. Kim. On broadcasting in heterogenous networks. 2004 Symp. on Discrete Algorithms (SODA). Full version in Algorithmica, Vol 48(1):1--21 (2007).",
        l: c2004,
      },
    ],
  },
  {
    year: "2003",
    papers: [
      {
        t: "R. Gailis and S. Khuller. Broadcast Scheduling with Deadlines. Manuscript .",
        l: a2003,
      },
      {
        t: "S. Khuller and Y. Kim. Equivalence of Two Linear Programming Relaxations for Broadcast Scheduling. Operations Research Letters Vol 32(5):473--478 (2004)",
        l: b2003,
      },
      {
        t: "S. Khuller, Y. Kim and Y-C. Wan. On generalized broadcasting and gossiping. 2003 European Symp. on Algorithms (ESA). Full version in Journal of Algorithms (2005) .",
        l: c2003,
      },
      {
        t: "S. Kashyap and S. Khuller. Algorithms for Non-Uniform Size Data Placement on Parallel Disks. FST&TCS 2003. Full version in Journal of Algorithms (2005) .",
        l: d2003,
      },
      {
        t: "R. Gandhi, S. Khuller, A. Srinivasan and N. Wang. Approximation algorithms for channel allocation problems in broadcast networks . APPROX 2003. Full version in Networks (2006).",
        l: e2003,
      },
      {
        t: "R.Gandhi, E. Halperin, S. Khuller, G. Kortsarz and A.Srinivasan. An improved approximation algorithm for vertex cover with hard capacities. ICALP 2003 . Full version in JCSS Vol 72(1):16--33 (2006).",
        l: f2003,
      },
      {
        t: "B. Cheng, C.F. Chou, L. Golubchik, S. Khuller, Y-C. Wan. Large scale data collection: a co-ordinated approach. . INFOCOM 2003. IEEE Journal on Special Areas in Communication (Special Issue on Design, Implementation and Analysis of Communication Protocols). Vol 22(1): 2004--2019, (2004).",
        l: g2003,
      },
      {
        t: "S. Banerjee, C. Kommareddy, K. Kar, B. Bhattacharjee and S. Khuller. Construction of an Efficient Overlay Multicast Infrastructure for Real-Time Applications. INFOCOM 2003",
        l: h2003,
      },
      {
        t: "S. Khuller, Y. Kim and Y-C. Wan. Algorithms for Data Migration with Cloning. 22nd ACM Principles of Database Conference (PODS) 2003. Full version in SIAM J. on Computing Vol 33(2): 448--461, (2004).",
        l: i2003,
      },
    ],
  },
  {
    year: "2002",
    papers: [
      {
        t: "C.F Chou, Y-C. Wan, B. Cheng, L. Golubchik, S. Khuller. A performance study of a large scale data collection problem, . 7th International Workshop on Web Content Caching and Distribution, (IWCW 2002), (Aug '02).",
        l: a2002,
      },
      {
        t: "R. Gandhi, S. Khuller, Y. Kim and Y-C. Wan. Approximation algorithms for broadcast scheduling. 9th Conference on Integer Programming and Combinatorial Optimization (IPCO) 2002. Full version in Algorithmica Vol 38: 597--608, (2004).",
        l: b2002,
      },
      {
        t: "R. Gandhi, S. Khuller, S. Parthasarathy and A. Srinivasan. Dependent Rounding on Bipartite Graphs. 43rd Conference Foundations of Computer Science (FOCS), (Nov '02). Full version in JACM.",
        l: c2002,
      },
      {
        t: "S. Khuller and A. Zhu. The General Steiner Tree-Star Problem. Information Processing Letters (2002) .",
        l: d2002,
      },
      {
        t: "Sudipto Guha, Rafi Hassin, Samir Khuller and Einat Or. Capacitated vertex covering with applications . SODA 2002. J. of Algorithms Vol 48(1), pp. 257--270, (2003).",
        l: e2002,
      },
      {
        t: "Leonid Zosin and Samir Khuller. On directed Steiner trees. SODA 2002.",
        l: f2002,
      },
    ],
  },
  {
    year: "2001",
    papers: [
      {
        t: "Ruth Ben-Yashar, Samir Khuller, Sarit Kraus. Optimal collective dichotomous choice under partial order constraints. Mathematical Social Sciences Vol 41, pp. 349--364, (2001).",
        l: "",
      },
      {
        t: "Rafi Hassin, Samir Khuller. Z-Approximations. Journal of Algorithms Vol 41(2), pp. 429--442 (2001).",
        l: a2001,
      },
      {
        t: "Rajiv Gandhi, Samir Khuller and Aravind Srinivasan. Approximation Algorithms for Partial Covering Problems. ICALP 2001. J. of Algorithms Vol 53(1): 55--84 (2004).",
        l: b2001,
      },
      {
        t: "Suman Banerjee and Samir Khuller. A Clustering Scheme for Hierarchical Routing in Wireless Networks. INFOCOM 2001.",
        l: c2001,
      },
      {
        t: "Moses Charikar, Samir Khuller, Giri Narasimhan and Dave Mount. Facility Location with Outliers. 12th Symposium on Discrete Algorithms (SODA), (Jan 2001), Washington DC.",
        l: d2001,
      },
      {
        t: "B. Cheng, C.F Chou, L. Golubchik, S. Khuller. A Secure and Scalable Web Upload Service Architecture. International Conference on Internet Computing (IC 2001), (Jun '01).",
        l: e2001,
      },
    ],
  },
  {
    year: "2000",
    papers: [
      {
        t: "Leana Golubchik, Sanjeev Khanna, Samir Khuller, Ramki Thurimella and An Zhu. Approximation Algorithms for Data Placement on Parallel Disks. 11th Symposium on Discrete Algorithms (SODA), (Jan 2000), San Francisco. Full version To appear ACM Trans. on Algorithms.",
        l: a2000,
      },
      {
        t: "Samir Khuller, Randeep Bhatia and Robert Pless. On Local Search and Placement of Meters in Networks. 11th Symposium on Discrete Algorithms (SODA), (Jan 2000), San Francisco. SIAM Journal on Computing Vol 32(2), pp. 470--487, (2003).",
        l: b2000,
      },
      {
        t: "Samir Khuller, Azriel Rosenfeld and Angela Wu. Centers of sets of pixels. Discrete Applied Mathematics Vol 103, pp. 297--306, (2000).",
        l: c2000,
      },
      {
        t: "S. Bhattacharjee, W. C. Cheng, C.-F. Chou, L. Golubchik, S. Khuller. Bistro: a Platform for Building Scalable Wide-Area Upload Applications. ACM SIGMETRICS Performance Evaluation Review (also presented at the Workshop on Performance and Architecture of Web Servers (PAWS) in June 2000). Volume 28, Number 2, September 2000, pp. 29-35.",
        l: d2000,
      },
    ],
  },
  {
    year: "1999",
    papers: [
      {
        t: "Randeep Bhatia, Samir Khuller, Robert Pless and Yoram J. Sussmann. The Full Degree Spanning Tree Problem. 10th Symposium on Discrete Algorithms (SODA), (Jan '99), Baltimore. (short paper). Full version . Networks Vol 36(4), pp. 1--7, (2000) .",
        l: a1999,
      },
      {
        t: "Samir Khuller, Balaji Raghavachari and An Zhu. A Uniform Framework for Approximating Weighted Connectivity Problems. 10th Symposium on Discrete Algorithms (SODA), (Jan '99), Baltimore. (short paper).",
        l: b1999,
      },
      {
        t: "Samir Khuller. An O(V^2) algorithm for Single Connectedness. Information Processing Letters Vol 72(3-4), pp. 105--107, (1999) .",
        l: c1999,
      },
      {
        t: "Samir Khuller, Anna Moss and Joseph Naor. The Budgeted Maximum Coverage Problem. Information Processing Letters Vol. 70(1), pp. 39--45, (1999) .",
        l: d1999,
      },
    ],
  },
  {
    year: "1998",
    papers: [
      {
        t: "Samir Khuller. A linear time algorithm for Lewis-Carrol's voting system. Unpublished (1998).",
        l: a1998,
      },
      {
        t: "Nili Guttmann-Beck, Rafi Hassin, Samir Khuller and Balaji Raghavachari. Approximation Algorithms with Bounded Performance Guarantees for the Clustered Traveling Salesman Problem. 1998 FST&TCS Conference (Madras, India). Algorithmica Vol 28 pp. 422--437, (2000).",
        l: b1998,
      },
      {
        t: "Moses Charikar, Samir Khuller and Balaji Raghavachari. Algorithms for Capacitated Vehicle Routing. 30th Symposium on Theory of Computing (STOC), (May '98), Dallas. SIAM Journal on Computing Vol 31(3), pp. 665--682 (2001).",
        l: c1998,
      },
      {
        t: "Sudipto Guha and Samir Khuller. Greedy Strikes Back: Improved Algorithms for Facility Location. 9th Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), (Jan '98), San Francisco, CA. Journal of Algorithms Vol 31(1) (1999), pp. 228-248.",
        l: d1998,
      },
      {
        t: "Randeep Bhatia, Sudipto Guha, Samir Khuller and Yoram J. Sussmann. Facility Location with Dynamic Distance Functions. 6th Scandinavian Workshop on Algorithm Theory (SWAT), (Jul '98), Stockholm, Sweden. Invited to Journal of Combinatorial Optimization Vol 2 (1998) pp. 199--217.",
        l: e1998,
      },
      {
        t: "Sudipto Guha and Samir Khuller. Improved Methods for Approximating Node Weighted Steiner Trees and Connected Dominating Sets. 1998 FST&TCS Conference (Madras, India). Information and Computation Vol 150, pp. 57--74 (1999).",
        l: f1998,
      },
    ],
  },
  {
    year: "1997",
    papers: [
      {
        t: "Samir Khuller, Robert Pless and Yoram J. Sussmann. Fault Tolerant K-Center Problems. 3rd Italian Conference on Algorithms and Complexity (CIAC), (Mar '97), Rome, Italy. Theoretical Computer Science Vol 242 (1-2), pp. 237-245, (2000).",
        l: a1997,
      },
    ],
  },
  {
    year: "1996",
    papers: [
      {
        t: "S. Khuller, B. Raghavachari and A. Rosenfeld. Landmarks in Graphs Discrete Applied Mathematics, Vol. 70 (3), pp. 217-229 (1996).",
        l: a1996,
      },
      {
        t: "Samir Khuller and Yoram J. Sussmann. The Capacitated K-Center Problem. 4th Annual European Symposium on Algorithms (ESA), (Sep '96), Barcelona, Spain. SIAM Journal on Discrete Mathematics Vol 13(3), pp. 403--418, (2000).",
        l: b1996,
      },
      {
        t: "Sudipto Guha and Samir Khuller. Approximation Algorithms for Connected Dominating Sets. 4th Annual European Symposium on Algorithms (ESA), (Sep '96), Barcelona, Spain. Algorithmica Vol 20 (1998), pp. 374--387.",
        l: c1996,
      },
      {
        t: "Sandor P. Fekete, Samir Khuller, Monika Klemmstein, Balaji Raghavachari and Neal Young. A Network-Flow Technique for Finding Low-Weight Bounded-Degree Spanning Trees. 5th Integer Programming and Combinatorial Optimization Conference (IPCO), (June '96), Vancouver, Canada. Journal of Algorithms Vol 24(2) (1997) pp 310--324.",
        l: d1996,
      },
      {
        t: "S. Khuller, B. Raghavachari and N. Young. On Strongly Connected Digraphs with Bounded Cycle Length. Discrete Applied Mathematics, Vol 69 (3) (1996) pp. 281--289.",
        l: "",
      },
    ],
  },
  {
    year: "1995",
    papers: [
      {
        t: "A. Bar-Noy, S. Khuller and B. Schieber. The complexity of finding most vital arcs and nodes. CS-TR-3539. Technical Report, University of Maryland (1995).",
        l: a1995,
      },
      {
        t: "S. Khuller and Y. Matias. A Simple Randomized Sieve Algorithm for the Closest-Pair Problem Information and Computation, Vol 188 (1), pp. 34--37, (1995).",
        l: b1995,
      },
      {
        t: "Samir Khuller and Balaji Raghavachari. Improved Approximation Algorithms for Uniform Connectivity Problems. 27th Symposium on Theory of Computing (STOC), (May '95), Las Vegas. Journal of Algorithms Vol 21(2) (1996) pp. 434--450.",
        l: c1995,
      },
      {
        t: "Randeep Bhatia, Samir Khuller and Joseph (Seffi) Naor. The Loading Time Scheduling Problem. 36th Conference on Foundations of Computer Science (FOCS), (Oct '95), Milwaukee. Journal of Algorithms Vol 36(1), pp. 1--33 (2000).",
        l: d1995,
      },
      {
        t: "S. Khuller, A. Rosenfeld and E. Rivlin. Graphbots: Mobility in Discrete Spaces . 22nd International Colloquium on Automata, Languages and Programming Conference (ICALP), (July '95), Szeged, Hungary. IEEE Transactions on Systems, Man and Cybernetics Vol 28(1) (1998) pp 29-38.",
        l: e1995,
      },
    ],
  },
  {
    year: "1994",
    papers: [
      {
        t: "S. Khuller and U. Vishkin. On the Parallel Complexity of Digraph Reachability. Information Processing Letters Vol 52 (5), pp. 239--241, (1994) .",
        l: a1994,
      },
      {
        t: "Samir Khuller, Balaji Raghavachari and Neal Young. Approximating the Minimum Equivalent Digraph . ACM-SIAM Symp. on Discrete Algorithms (SODA) (Jan '94). SIAM Journal on Computing, Vol 24 (4) pp. 859--872, (1995).",
        l: b1994,
      },
      {
        t: "Samir Khuller, Balaji Raghavachari and Neal Young. Low Degree Spanning Trees of Small Weight . 26th Symposium on Theory of Computing (STOC), (May '94), Montreal. SIAM Journal on Computing Vol 25 (2) pp. 355--368, (1996).",
        l: c1994,
      },
    ],
  },
  {
    year: "1993",
    papers: [
      {
        t: "S. Khuller, J. Naor and P. Klein. The Lattice Structure of Flow in Planar Graphs. SIAM Journal of Discrete Mathematics, Vol 6 (3) pp. 477--490, (1993).",
        l: a1993,
      },
      {
        t: "S. Khuller, B. Raghavachari and N. Young. Designing Multi-Commodity Flow Trees . Workshop on Algorithms and Data Structures (WADS), (Aug '93), Montreal, Canada. Information Processing Letters, Vol 50(1) (1994) pp. 49--55.",
        l: b1993,
      },
      {
        t: "S. Khuller, B. Raghavachari and N. Young, Balancing Minimum Spanning and Shortest Path Trees. 4th Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), (Jan '93), Austin. Algorithmica, Vol 14(4) (1995) pp. 305--321.",
        l: c1993,
      },
      {
        t: "S. Khuller, U. Vishkin and N. Young. A Primal Dual Parallel Approximation Technique Applied to Weighted Set and Vertex Cover. 1993 IPCO Conference (Erice, Italy). Full version in Journal of Algorithms, Vol 17(2): 280--289, (1994).",
        l: d1993,
      },
    ],
  },
  {
    year: "1992",
    papers: [
      {
        t: "S. Khuller and B. Schieber. On Independent Spanning Trees. Information Processing Letters, Vol 42(6):321--323 (1992).",
        l: a1992,
      },
      {
        t: "S. Khuller and U. Vishkin. Biconnectivity Approximations and Graph Carvings. 1992 STOC (Victoria). Full version in Journal of the ACM , Vol 41(2):214--235 (1994).",
        l: b1992,
      },
      {
        t: "S. Khuller and R. Thurimella. Approximation Algorithms for Graph Augmentation. 1992 ICALP (Wien). Full version in Journal of Algorithms, Vol 14(2):214--225 (1993).",
        l: c1992,
      },
      {
        t: "A. Aggarwal, A. Bar-Noy, S. Khuller, D. Kravets and B. Schieber. Efficient Minimum Cost Matching Using Quadrangle Inequality . 1992 FOCS (Pittsburgh). Full version in Journal of Algorithms, Vol 19(1): 116--143 (1995).",
        l: "",
      },
    ],
  },
  {
    year: "1991",
    papers: [
      {
        t: "E. Arkin, S. Khuller and J. Mitchell. Geometric Knapsack Problems. 1991 WADS Conference, Ottawa. Full version in Algorithmica, Vol 10: 399--427 (1993).",
        l: "",
      },
      {
        t: "S. Khuller, S. Mitchell and V. Vazirani. Online algorithms for weighted matchings and stable marriages . 1991 ICALP (Madrid). Full version in Theoretical Computer Science, Vol 127 (2): 255--267 (1994).",
        l: b1991,
      },
      {
        t: "S. Khuller and Y. Matias. A simple randomized sieve algorithm for the closest pair problem . 1991 CCCG Conference (Vancouver). Full version in Information and Computation, Vol 188(1):34--37 (1995).",
        l: c1991,
      },
      {
        t: "S. Khuller and V. Vazirani. Planar Graph Coloring is not Self-Reducible, assuming P # NP. Theoretical Computer Science, VOl 88(1): 183--190 (1991).",
        l: d1991,
      },
    ],
  },
  {
    year: "1990",
    papers: [
      {
        t: "S. Khuller and J. Naor. Flow in Planar Graphs with Vertex Capacities. 1990 IPCO Conference (Waterloo). Full version in Algorithmica (Special Issue on Network Flows), Vol 11:200-225 (1994).",
        l: a1990,
      },
      {
        t: "S. Khuller. Coloring algorithms for K5-minor free graphs. Information Processing Letters, Vol 33 (4):203--208, (1990).",
        l: "",
      },
      {
        t: "S. Khuller and J. Mitchell. On a triangle counting problem. Information Processing Letters, Vol 33 (6):319--322, (1990)",
        l: c1990,
      },
    ],
  },
  {
    year: "1989",
    papers: [
      {
        t: "S. Khuller. Parallel Algorithms for the Subgraph Homeomorphism problem. 1989 WADS Conference, Ottawa, Canada.",
        l: a1989,
      },
      {
        t: "S. Khuller, S. Mitchell and V. Vazirani. Processor Efficient Parallel Algorithms for the Two Disjoint Paths Problem and for Finding a Kuratowski Homeomorph. 1989 FOCS (Raleigh). Full version in SIAM J. on Computing, Vol 21(3):486--506 (1992).",
        l: "",
      },
      {
        t: "S. Khuller and B. Scheiber. Efficient Parallel Algorithms for Testing Connectivity and Finding Disjoint s-t Paths in Graphs. 1989 FOCS (Raleigh). Full version in SIAM J. on Computing, Vol 20(2):352--375 (1991).",
        l: c1989,
      },
      {
        t: "S. Khuller. On Computing Graph Closures. Information Processing Letters, Vol 31 (5):249--255 (1989).",
        l: "",
      },
    ],
  },
  {
    year: "1988",
    papers: [
      {
        t: "S. Khuller. Extending Planar Graph Algorithms to K_3,3 Graphs. FSTTCS 1988, India. Full version in Information and Computation, Vol 80(1):13--25 (1990).",
        l: "",
      },
    ],
  },
];
