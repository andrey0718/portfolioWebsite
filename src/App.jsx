import { useEffect, useState } from "react";

function App() {
  const [openItems, setOpenItems] = useState({
    subway: false,
    panda: false,
    detailing: false,
    amazon: false,
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
            I’m a 18 year old student and developer focused on building clean,
            reliable web applications. I currently live in Clearwater, Florida.
            I have been learning to develop software for about a year now. I
            focus on learning the basics adding to my mental toolbox that I will
            be able to apply to any problem thrown my way.
          </p>

          <div className="divider"></div>
        </section>

        <section id="experience" className="section reveal">
          <h2 className="heading">Work Experience</h2>

          <p className="subtitle" style={{ marginBottom: "22px" }}>
            I am Currently a Student at St Petersburg college Wrapping up my associates 
            Degree and working on projects to build my resume and portfolio. While in school
            I currentyl work at panda express and am aiming to get internships and job offers. I am excited to head over 
            To USF exposing me to a new network of people and more in depth learning. 
          </p>

          <div className="exp-vertical">
            <div className={`exp-block ${openItems.subway ? "open" : ""}`}>
              <button
                className="exp-row"
                type="button"
                aria-expanded={openItems.subway}
                onClick={() => toggleItem("subway")}
              >
                <span className="exp-icon" aria-hidden="true">
                  🥪
                </span>
                <span className="exp-name">Subway</span>
                <span className="exp-chevron" aria-hidden="true">
                  ›
                </span>
              </button>

              <div
                className="exp-panel"
                aria-hidden={!openItems.subway}
              >
                <h3 className="exp-title">Sandwich artist — Subway</h3>
                <p className="card-dates">September 2023 – May 2025</p>
              </div>
            </div>

            <div className={`exp-block ${openItems.panda ? "open" : ""}`}>
              <button
                className="exp-row"
                type="button"
                aria-expanded={openItems.panda}
                onClick={() => toggleItem("panda")}
              >
                <span className="exp-icon" aria-hidden="true">
                  🥡
                </span>
                <span className="exp-name">Panda Express</span>
                <span className="exp-chevron" aria-hidden="true">
                  ›
                </span>
              </button>

              <div
                className="exp-panel"
                aria-hidden={!openItems.panda}
              >
                <h3 className="exp-title">Cook — Panda Express</h3>
                <p className="card-dates">June 2025 – Present</p>
              </div>
            </div>

            

            <div className={`exp-block ${openItems.spc ? "open" : ""}`}>
              <button
                className="exp-row"
                type="button"
                aria-expanded={openItems.spc}
                onClick={() => toggleItem("spc")}
              >
                <span className="exp-icon" aria-hidden="true">
                  🎓
                </span>
                <span className="exp-name">St. Petersburg College</span>
                <span className="exp-chevron" aria-hidden="true">
                  ›
                </span>
              </button>

              <div
                className="exp-panel"
                aria-hidden={!openItems.spc}
              >
                <h3 className="exp-title">
                  Student — St. Petersburg College
                </h3>
                <p className="card-dates">2024 – Present</p>
              </div>
            </div>
          </div>

          <div className="divider"></div>
        </section>

        <section id="tech" className="section reveal">
          <h2 className="heading">Technologies</h2>

          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">Django</span>
            <span className="tag">C++</span>
            <span className="tag">Git</span>
            <span className="tag">HTML</span>
            <span className="tag">React</span>
            <span className="tag">Vue</span>

          </div>

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
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              className="btn"
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a className="btn" href="mailto:your.email@example.com">
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