import { useEffect, useState } from 'react'
import { resumeContent } from './data/resumeContent'
import './App.css'

function useSectionReveals() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useSectionReveals()

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" >
        <a className="wordmark" href="#top" onClick={closeMenu}>
          {resumeContent.profile.name}
        </a>
        <div className="header-actions">
          <nav
            aria-label="Main navigation"
            className={menuOpen ? 'site-nav is-open' : 'site-nav'}
            id="site-navigation"
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
          <div aria-label="Social profiles" className="header-socials">
            {resumeContent.profile.profiles.map((profile) => (
              <a
                aria-label={profile.description}
                className="header-social-link"
                href={profile.href}
                key={profile.label}
                rel="noreferrer"
                target="_blank"
                title={profile.label}
              >
                {profile.label === 'GitHub' ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.7-1.46-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.22 1.14-3-.12-.28-.5-1.43.1-2.97 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.6 1.54.22 2.69.1 2.97.71.78 1.14 1.78 1.14 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.72H4.96V9.14h2.97v9.58ZM6.45 7.83a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.27 10.89h-2.96v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.2-1.79 2.46v4.74H9.46V9.14h2.84v1.31h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.98 3.58 4.55v5.27Z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <button
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="hero" id="top">
          <div aria-hidden="true" className="hero-atmosphere">
            <svg className="hero-breeze" preserveAspectRatio="none" viewBox="0 0 1440 180">
              <path d="M0 82 C120 25 240 25 360 82 S600 139 720 82 S960 25 1080 82 S1320 139 1440 82" />
              <path d="M0 126 C120 69 240 69 360 126 S600 183 720 126 S960 69 1080 126 S1320 183 1440 126" />
              <path d="M0 38 C120 -19 240 -19 360 38 S600 95 720 38 S960 -19 1080 38 S1320 95 1440 38" />
            </svg>
            <svg className="hero-waves" preserveAspectRatio="none" viewBox="0 0 1440 220">
              <path d="M0 108 C120 28 240 28 360 108 S600 188 720 108 S960 28 1080 108 S1320 188 1440 108" />
              <path d="M0 146 C120 66 240 66 360 146 S600 226 720 146 S960 66 1080 146 S1320 226 1440 146" />
              <path d="M0 70 C120 -10 240 -10 360 70 S600 150 720 70 S960 -10 1080 70 S1320 150 1440 70" />
              <path d="M0 184 C120 104 240 104 360 184 S600 264 720 184 S960 104 1080 184 S1320 264 1440 184" />
            </svg>
          </div>
          <div className="hero-copy">
            <div className="hero-identity">
              <h1 className="hero-name" id="hero-title">
                <span aria-hidden="true" className="wave-name">
                  {resumeContent.profile.shortName.split('').map((letter, index) => (
                    <span className="wave-letter" key={`${letter}-${index}`}>
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="visually-hidden">{resumeContent.profile.name}</span>
              </h1>
              <p className="hero-role">
                {resumeContent.profile.title.toUpperCase()} · AI &amp; SYSTEMS
              </p>
            </div>
            <div className="hero-bottom">
              <p className="hero-intro">{resumeContent.profile.tagline}</p>
              <a className="primary-link" href="#projects">
                Explore projects
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-title" className="about section" id="about">
          <div className="section-heading" data-reveal>
            <h2 id="about-title">About Shail</h2>
          </div>
          <div className="about-copy" data-reveal>
            <p>{resumeContent.profile.summary[0]}</p>
            <p>{resumeContent.profile.summary[1]}</p>
            <p className="quiet-note">{resumeContent.profile.summaryReviewNote}</p>
          </div>

          <div className="about-image" data-reveal>
            <img
              src="/images/profile.jpg"
              alt="Shail Pradhan"
              loading="lazy"
            />
          </div>
        </section>

        <section aria-labelledby="skills-title" className="skills section" id="skills">
          <div className="section-heading" data-reveal>
            <h2 id="skills-title">Technical skills</h2>
            <p className="quiet-note">
              Technologies and areas reflected in my work; no proficiency levels are implied.
            </p>
          </div>
          <div className="skill-list">
            {resumeContent.skills.map((group) => (
              <article className="skill-group" data-reveal key={group.category}>
                <h3>{group.category}</h3>
                <ul className="skill-items">
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="experience-title"
          className="experience section"
          id="experience"
        >
          <div className="section-heading" data-reveal>
            <h2 id="experience-title">Professional experience</h2>
          </div>
          <div className="experience-list">
            <p className="quiet-note experience-verification" data-reveal>
              {resumeContent.experience.verificationNote}
            </p>
            {resumeContent.experience.roles.map((role) => (
              <article className="experience-item" data-reveal key={role.title}>
                <div className="experience-role">
                  <h3>{role.title}</h3>
                  <p>{role.dates}</p>
                </div>
                <div className="experience-employer">
                  <p>{resumeContent.experience.employer}</p>
                  <p>{resumeContent.experience.location}</p>
                  <p className="quiet-note">Responsibilities and achievements not provided.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="projects-title" className="projects section" id="projects">
          <div className="section-heading" data-reveal>
            <h2 id="projects-title">Projects</h2>
          </div>
          <div className="project-list">
            {resumeContent.projects.map((project) => (
              <article className="project-item" data-reveal key={project.title}>
                <div className="project-heading">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <a
                    aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                    className="project-link"
                    href={project.repository}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View repository
                  </a>
                </div>
                <div className="project-detail">
                  <p>{project.description}</p>
                  <ul aria-label="Technologies" className="project-technologies">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <p className="quiet-note">{project.repositoryNote}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="education-title"
          className="education section"
          id="education"
        >
          <div className="section-heading" data-reveal>
            <h2 id="education-title">Education &amp; certifications</h2>
          </div>
          <div className="education-copy">
            <article className="education-entry" data-reveal>
              <h3>{resumeContent.education.specialization}</h3>
              <p>{resumeContent.education.degree}</p>
              <p>{resumeContent.education.institution}</p>
              <p>{resumeContent.education.dates}</p>
              <p>{resumeContent.education.grade}</p>
            </article>
            <details className="certifications-disclosure" data-reveal>
              <summary>Certifications</summary>
              {resumeContent.certifications.items.length > 0 ? (
                <ul>
                  {resumeContent.certifications.items.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              ) : (
                <p className="quiet-note">{resumeContent.certifications.emptyMessage}</p>
              )}
            </details>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact section" id="contact">
          <div className="contact-copy" data-reveal>
            <h2 id="contact-title">Get in touch</h2>
            <p>
              Reach out through either profile, or add an email address when you
              are ready.
            </p>
          </div>
          <div className="contact-links" data-reveal>
            {resumeContent.profile.profiles.map((profile) => (
              <a
                aria-label={profile.description}
                href={profile.href}
                key={profile.label}
                rel="noreferrer"
                target="_blank"
              >
                {profile.label}
              </a>
            ))}
            <span className="contact-location">{resumeContent.profile.location}</span>
            <span className="contact-location">
              {resumeContent.profile.emailPlaceholder}
            </span>
          </div>
        </section>

        <section aria-labelledby="resume-title" className="resume section" id="resume">
          <div className="resume-copy" data-reveal>
            <h2 id="resume-title">Resume</h2>
            <p id="resume-help">
              {resumeContent.resumePdf.available
                ? 'Download a PDF copy of my resume.'
                : 'Resume PDF not added yet.'}
            </p>
            {resumeContent.resumePdf.available ? (
              <a
                aria-describedby="resume-help"
                className="resume-button resume-link"
                download
                href={resumeContent.resumePdf.path}
              >
                Download resume PDF
              </a>
            ) : (
              <button
                aria-describedby="resume-help"
                className="resume-button"
                disabled
                type="button"
              >
                Resume PDF coming soon
              </button>
            )}
          </div>
          <p aria-hidden="true" className="resume-mark">
            PDF
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <a
          aria-label={`Back to top, ${resumeContent.profile.name}`}
          className="footer-name"
          href="#top"
        >
          {resumeContent.profile.name}
        </a>
        <div className="footer-bottom">
          <p>{resumeContent.profile.name}</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  )
}

export default App
