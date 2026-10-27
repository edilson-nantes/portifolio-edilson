import { useState } from 'react';
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { ArrowUpRight, ArrowDownRight, Check,
  ShieldCheck, Braces, Sparkles,
  Code2, Globe2, Layers3,
  Server, Mail, MessageCircle,
 } from 'lucide-react';
import Header from './components/Header.jsx';
import { content } from './data/content.jsx';
import { CONTACT } from './data/contact.js';
import './App.css';

const iconMap = { globe: Globe2, code: Code2, layers: Layers3 };

function App() {
  const [lang, setLang] = useState('pt');
  const text = content[lang];
  const emailHref = `mailto:${CONTACT.email}`;
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}`;

  return (
    <div className="site-shell">

      <Header
        text={text}
        lang={lang}
        setLang={setLang}
      />

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" />{text.availability}</div>
            <p className="eyebrow"><span className="eyebrow-line" />{text.heroEyebrow}</p>
            <h1>{text.heroTitle}</h1>
            <p className="hero-description">{text.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{text.primaryCta}<ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#projects">{text.secondaryCta}<ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-proof">{text.proof.map((item, i) => <span key={item}><Check size={14} />{item}</span>)}</div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-section">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
              <div className="visual-code-card">
                <div className="code-card-top">
                  <span className="window-dots"><i /><i /><i /></span><span>solution.ts</span><span className="code-lock"><ShieldCheck size={14} /></span>
                </div>
                <div className="code-lines" aria-hidden="true">
                  <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">idea</span> = {'{'}</p>
                  <p><span className="code-muted">02</span> &nbsp; problem: <span className="code-green">'real'</span>,</p>
                  <p><span className="code-muted">03</span> &nbsp; approach: <span className="code-green">'thoughtful'</span>,</p>
                  <p><span className="code-muted">04</span> &nbsp; quality: <span className="code-orange">true</span>,</p>
                  <p><span className="code-muted">05</span> {'}'}</p>
                  <p className="code-spacer"><span className="code-muted">06</span> </p>
                  <p><span className="code-muted">07</span> <span className="code-purple">export default</span> <span className="code-blue">solution</span>;</p>
                </div>
                <div className="code-card-footer"><span><span className="status-dot" /> all systems thoughtful</span><span>100%</span></div>
              </div>
              <div className="floating-chip chip-top"><Braces size={16} /><span>Clean code</span></div>
              <div className="floating-chip chip-bottom"><Sparkles size={16} /><span>Purposeful design</span></div>
              <div className="visual-caption"><span>01 / 05</span><span>IDEAS → IMPACT</span></div>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" />SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-kicker"><span>01</span>{text.aboutEyebrow}</div>
          <div className="about-grid">
            <h2>{text.aboutTitle}</h2>
            <div className="about-body">
              <p>{text.aboutText}</p>
              <div className="about-note">
                <span className="note-icon"><Code2 size={17} /></span><span>{text.aboutNote}</span><ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </section>

        <section className="services section-wrap section-pad" id="services">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span>02</span>{text.servicesEyebrow}</div>
              <h2>{text.servicesTitle}</h2>
            </div>
            <p>{text.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {text.services.map((service) => {
              const Icon = iconMap[service.icon];
              return <article className="service-card" key={service.number}>
                        <div className="service-card-top">
                          <span>{service.number}</span><Icon size={22} strokeWidth={1.6} />
                        </div>
                        <h3>{service.title}</h3><p>{service.text}</p>
                        <a href="#contact" aria-label={`${service.title} — contato`} className="card-arrow">
                          <ArrowUpRight size={19} />
                        </a>
                      </article>;
            })}
          </div>
        </section>

        <section className="process-band">
          <div className="section-wrap section-pad process-inner">
            <div className="section-kicker"><span>03</span>{text.processEyebrow}</div>
            <h2>{text.processTitle}</h2>
            <div className="process-grid">
              {text.process.map(([number, title, text]) => {
                return <article className="process-step" key={number}>
                  <span className="process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              })}
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-pad" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span>04</span>{text.projectsEyebrow}</div>
              <h2>{text.projectsTitle}</h2>
            </div>
            <p>{text.projectsIntro}</p>
          </div>
          <div className="project-grid">
            {text.projects.map((project, index) => (
              <article
                className={`project-card project-${index + 1}`}
                key={project.title}
              >
                <div className="project-art">
                  <div className="project-art-grid" />
                  {index === 0 ? (
                    <div className="art-api">
                      <span>POST</span>
                      <b>/api/v1/orders</b>
                      <i><Check size={14} /> 201 Created</i>
                    </div>
                  ) : index === 1 ? (
                    <div className="art-cloud">
                      <div className="cloud-node"><Server size={24} /><span>Function</span></div>
                      <div className="cloud-connector" />
                      <div className="cloud-node"><Layers3 size={24} /><span>Queue</span></div>
                      <div className="cloud-connector" />
                      <div className="cloud-node"><Braces size={24} /><span>Worker</span></div>
                    </div>
                  ) : (
                    <div className="art-browser">
                      <div className="browser-bar"><i /><i /><i /></div>
                      <div className="browser-content">
                        <span />
                        <b />
                        <b />
                        <div><i /><i /><i /></div>
                      </div>
                    </div>
                  )}
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tag-list">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-status">
                    <span className="status-dot status-muted" />
                    {project.status}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <div className="experience-header">
            <div className="section-kicker"><span>05</span>{text.experienceEyebrow}</div>
            <h2>{text.experienceTitle}</h2>
            <p>{text.experienceIntro}</p>
            <div className="education-card">
              <div className="education-icon"><Layers3 size={19} /></div>
              <div>
                <span>{text.educationTitle}</span>
                <strong>{text.education}</strong>
                <small>{text.educationNote}</small>
              </div>
            </div>
          </div>
          <div className="timeline">
            {text.jobs.map((job, index) => {
              return <article className="timeline-item" key={job.company}>
                        <div className="timeline-marker">{index === 0 ? <span /> : null}</div>
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
              <div className="section-kicker"><span>06</span>{text.skillsEyebrow}</div>
              <h2>{text.skillsTitle}</h2>
            </div>
            <p>{text.skillsIntro}</p>
          </div>
          <div className="skills-grid">
            {text.skillGroups.map(([group, ...skills]) => {
              return <div className="skill-group" key={group}>
                        <h3>{group}</h3>
                        <div className="skill-pills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                      </div>
                    })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-decoration decoration-one" />
          <div className="contact-decoration decoration-two" />
          <div className="section-wrap contact-inner">
            <div className="section-kicker"><span>07</span>{text.contactEyebrow}</div>
            <h2>{text.contactTitle}</h2>
            <p>{text.contactText}</p>
            <div className="contact-actions">
              <a className="button button-light" href={emailHref}><Mail size={17} />{text.emailLabel}<ArrowUpRight size={16} /></a>
              <a className="button button-outline-light" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} />{text.whatsappLabel}<ArrowUpRight size={16} /></a>
            </div>
            <div className="social-links">
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><LuLinkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer"><LuGithub size={16} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={emailHref}><Mail size={16} /> {CONTACT.email}</a>
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
