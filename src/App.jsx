import { useEffect, useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiGit,
  SiHtml5,
  SiKubernetes,
  SiPython,
  SiReact,
  SiVim,
  SiVuedotjs,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import qleetLogo from "./assets/qleet-logo.svg";
import usfLogo from "./assets/usf-logo.svg";
import spcLogo from "./assets/spc-logo.png";

const technologies = [
  { name: "Python", Icon: SiPython },
  { name: "Django", Icon: SiDjango },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Go", Icon: FaGolang, wide: true },
  { name: "SQL", Icon: FaDatabase },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Git", Icon: SiGit },
  { name: "Vim", Icon: SiVim },
  { name: "HTML", Icon: SiHtml5 },
  { name: "React", Icon: SiReact },
  { name: "Vue", Icon: SiVuedotjs },
];

const experiences = [
  {
    id: "qleet",
    logo: qleetLogo,
    role: "Software Developer Intern",
    org: "Qleet",
    dates: "2026 – Present",
    detail: "Working mainly on the front-end UI and fixing backend bugs.",
  },
  {
    id: "usf",
    logo: usfLogo,
    light: true,
    role: "Student, B.S. Computer Science",
    org: "University of South Florida",
    dates: "2026 – Present",
    detail: "Working toward my bachelor’s degree in Computer Science.",
  },
  {
    id: "spc",
    logo: spcLogo,
    light: true,
    role: "Student",
    org: "St. Petersburg College",
    dates: "2024 – 2026",
    detail: "Completed my associate’s degree.",
  },
];

function App() {
  const [openItems, setOpenItems] = useState({
    qleet: false,
    usf: false,
    spc: false,
  });

  useEffect(() => {
    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Scroll reveal animation
    const revealEls = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    // Active nav highlighting
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = [...document.querySelectorAll("section[id]")];

    const setActiveLink = () => {
      const scrollPos = window.scrollY + 120;
      let currentId = sections[0]?.id || "";

      for (const section of sections) {
        if (section.offsetTop <= scrollPos) currentId = section.id;
      }

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${currentId}`
        );
      });
    };

    window.addEventListener("scroll", setActiveLink, { passive: true });
    window.addEventListener("load", setActiveLink);
    setActiveLink();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", setActiveLink);
      window.removeEventListener("load", setActiveLink);
    };
  }, []);

  const toggleItem = (item) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a className="logo" href="#about">
            Andrey Ivanov
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Work</a>
            <a href="#tech">Tech</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container">
        <section id="about" className="section reveal">
          <h1 className="title">
            Hey, I’m Andrey<span className="accent-dot">.</span>
          </h1>

          <p className="subtitle">
            I’m a 19-year-old student and developer in Clearwater, Florida,
            focused on building clean, reliable web applications. I’m studying
            Computer Science at the University of South Florida and working as
            a Software Developer Intern at Qleet.
          </p>

          <p className="subtitle">
            I started building projects in my junior year of high school in
            2024. I focus on learning the basics and adding to my mental
            toolbox, so I can use that foundation to tackle any problem that
            comes my way.
          </p>

          <div className="divider"></div>
        </section>

        <section id="experience" className="section reveal">
          <h2 className="heading">Work Experience</h2>

          <p className="subtitle" style={{ marginBottom: "22px" }}>
            I am currently a student at the University of South Florida, working toward my bachelor's
            degree in Computer Science. Alongside school, I work as a Software Developer Intern at
            Qleet and keep building projects to grow my resume and portfolio.
          </p>

          <div className="exp-vertical">
            {experiences.map((exp) => (
              <div
                className={`exp-block ${openItems[exp.id] ? "open" : ""}`}
                key={exp.id}
              >
                <button
                  className="exp-row"
                  type="button"
                  id={`exp-${exp.id}-button`}
                  aria-expanded={openItems[exp.id]}
                  aria-controls={`exp-${exp.id}-panel`}
                  onClick={() => toggleItem(exp.id)}
                >
                  <span
                    className={`exp-icon exp-icon--logo${
                      exp.light ? " exp-icon--light" : ""
                    }`}
                  >
                    <img src={exp.logo} alt={exp.org} />
                  </span>
                  <span className="exp-name">{exp.role}</span>
                  <span className="exp-chevron" aria-hidden="true">
                    ›
                  </span>
                </button>

                <div
                  className="exp-panel"
                  id={`exp-${exp.id}-panel`}
                  role="region"
                  aria-labelledby={`exp-${exp.id}-button`}
                >
                  <p className="exp-dates">{exp.dates}</p>
                  <p className="exp-detail">{exp.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="divider"></div>
        </section>

        <section id="tech" className="section reveal">
          <h2 className="heading">Technologies 💻</h2>

          <ul className="tech-grid">
            {technologies.map((tech) => {
              const Icon = tech.Icon;
              return (
                <li className="tech-item" key={tech.name}>
                  <span className="tech-icon-slot">
                    <Icon
                      className={`tech-icon${tech.wide ? " tech-icon--wide" : ""}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span>{tech.name}</span>
                </li>
              );
            })}
          </ul>

          <div className="divider"></div>
        </section>

        <section id="contact" className="section reveal">
          <h2 className="heading">Contact</h2>

          <p className="subtitle" style={{ marginBottom: "22px" }}>
            I’m always open to new opportunities, collaborations, and
            conversations. Feel free to reach out.
          </p>

         <div className="contact-buttons">
  <a
    className="btn"
    href="https://github.com/andrey0718"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    className="btn"
    href="https://www.linkedin.com/in/andrey-ivanov-a732292a8"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    className="btn"
    href="mailto:andrey.ivano22@gmail.com"
  >
    Email
  </a>
</div>
</section>
</main>

      <footer className="footer">
        <p>
          © <span id="year"></span> Andrey
        </p>
      </footer>
    </>
  );
}

export default App;