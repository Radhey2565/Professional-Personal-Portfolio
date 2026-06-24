import "./Achievements.css";

const achievements = [
  {
    title: "Vista Equity Partners AI Simulation",
    link: "https://www.theforage.com/completion-certificates/BotenCEjm3LFxtq9A/EregFenDKXDDeTGR2_BotenCEjm3LFxtq9A_RiuNh6LzQBxLopZCd_1765639904950_completion_certificate.pdf",
  },
  {
    title: "Deloitte Cyber Simulation",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_RiuNh6LzQBxLopZCd_1751654830551_completion_certificate.pdf",
  },
  {
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_RiuNh6LzQBxLopZCd_1752436137364_completion_certificate.pdf",
  },
  {
    title: "Mastercard Cybersecurity Simulation",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_RiuNh6LzQBxLopZCd_1752386138768_completion_certificate.pdf",
  },
  {
    title: "Stock Market Using AI ",
    link: "https://certx.in/certificate/7c0fb9e8-cf47-448b-bce3-5e0863a83434373620",
  },
  {
    title: "Tata - Cybersecurity Analyst Job Simulation ",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_RiuNh6LzQBxLopZCd_1752386844139_completion_certificate.pdf",
  },
  
  
  {
    title: "Best Performer - SOLVIT Hackathon '25'",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7319537297589170176/",
    
  },
  {
    title: "Solved 150+ DSA Problems on LeetCode",
    link: "https://leetcode.com/u/Ramo2569/",
    
  },
  {
    title: "Academic Excellence Award - 2021",
    
  },

];

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <h2>Achievements & Certifications</h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-card"
          >
            {item.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Achievements;