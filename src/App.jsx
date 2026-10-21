import { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Check,
  ShieldCheck, Braces, Sparkles,
  Code2, Globe2, Layers3
 } from 'lucide-react';
import Header from './components/Header.jsx';
import { content } from './data/content.jsx';
import './App.css';

const iconMap = { globe: Globe2, code: Code2, layers: Layers3 };

function App() {
  const [lang, setLang] = useState('pt');
  const text = content[lang];

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
              <div className="section-kicker">
                <span>02</span>{text.servicesEyebrow}
              </div>
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
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
