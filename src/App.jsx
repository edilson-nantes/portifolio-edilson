import { useEffect, useState } from 'react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { ArrowUpRight, ArrowDownRight, Mail, MessageCircle } from 'lucide-react';
import Header from './components/Header.jsx';
import { content } from './data/content.jsx';
import { CONTACT } from './data/contact.js';
import './App.css';

function App() {
  const [lang, setLang] = useState('pt');
  const text = content[lang];
  const emailHref = `mailto:${CONTACT.email}`;
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}`;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });

    revealElements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add('reveal-ready');

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, [lang]);

  return (
    <div className="site-shell">
      <Header text={text} lang={lang} setLang={setLang} />

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy" data-reveal>
            <p className="availability">{text.availability}</p>
            <h1>{text.heroTitle}</h1>
            <p className="hero-description">{text.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{text.primaryCta}<ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button button-secondary" href="#projects">{text.secondaryCta}<ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-proof" data-reveal>
            {text.proof.map((item) => <p key={item}>{item}</p>)}
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="about-grid">
            <h2 data-reveal="0">{text.aboutTitle}</h2>
            <div className="about-body" data-reveal="1">
              <p>{text.aboutText}</p>
              <p className="about-note">{text.aboutNote}</p>
            </div>
          </div>
        </section>

        <section className="services section-wrap section-pad" id="services">
          <div className="section-heading">
            <div>
              <h2 data-reveal="0">{text.servicesTitle}</h2>
            </div>
            <p data-reveal="1">{text.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {text.services.map((service, index) => {
              return (
                <a className="service-card" href="#contact" key={service.title} data-reveal={String(index % 4)}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-link">{text.primaryCta}<ArrowUpRight size={16} aria-hidden="true" /></span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="process-band">
          <div className="section-wrap section-pad process-inner">
            <h2 data-reveal="0">{text.processTitle}</h2>
            <div className="process-grid">
              {text.process.map(([title, description], index) => {
                return <article className="process-step" key={title} data-reveal={String((index % 3) + 1)}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              })}
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-heading">
            <div>
              <h2 data-reveal="0">{text.projectsTitle}</h2>
            </div>
            <p data-reveal="1">{text.projectsIntro}</p>
          </div>
          <div className="project-grid">
            {text.projects.map((project, index) => (
              <article className="project-card" key={project.title} data-reveal={String(index % 4)}>
                <div className="project-info">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <p className="project-tags">{project.tags.join(' · ')}</p>
                  <div className="project-status">
                    {project.status}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <div className="experience-header" data-reveal="0">
            <h2>{text.experienceTitle}</h2>
            <p>{text.experienceIntro}</p>
            <div className="education-card">
              <div>
                <span>{text.educationTitle}</span>
                <strong>{text.education}</strong>
                <small>{text.educationNote}</small>
              </div>
            </div>
          </div>
          <div className="timeline">
            {text.jobs.map((job, index) => {
              return <article className="timeline-item" key={job.company} data-reveal={String((index % 3) + 1)}>
                        <div className="timeline-content">
                          <span className="timeline-period">{job.period}</span>
                          <h3>{job.role}</h3>
                          <span className="timeline-company">{job.company}</span>
                          <p>{job.text}</p>
                        </div>
                      </article>
            })}
          </div>
        </section>

        <section className="skills section-wrap section-pad">
          <div className="section-heading">
            <div>
              <h2 data-reveal="0">{text.skillsTitle}</h2>
            </div>
            <p data-reveal="1">{text.skillsIntro}</p>
          </div>
          <div className="skills-grid">
            {text.skillGroups.map(([group, ...skills], index) => {
              return <div className="skill-group" key={group}>
                        <h3>{group}</h3>
                        <div className="skill-pills" data-reveal={String(index % 4)}>{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                      </div>
                    })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <h2 data-reveal="0">{text.contactTitle}</h2>
            <p data-reveal="1">{text.contactText}</p>
            <div className="contact-actions" data-reveal="2">
              <a className="button button-light" href={emailHref}><Mail size={17} aria-hidden="true" />{text.emailLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="button button-outline-light" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" />{text.whatsappLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="social-links" data-reveal="3">
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><LuLinkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer"><LuGithub size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={emailHref}><Mail size={16} aria-hidden="true" /> {CONTACT.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">en<span>.</span></span>
          <span className="wordmark-label">EDILSON NANTES</span>
        </a>
        <span className="footer-note">© {new Date().getFullYear()} Edilson Nantes. {text.footer}</span>
        <a href="#home" className="back-top">{text.backTop}<ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}

export default App;
