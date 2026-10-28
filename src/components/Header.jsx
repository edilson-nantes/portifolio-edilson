import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function Header({ text, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="header">
      <a className="wordmark" href="#home" aria-label="Edilson Nantes, início" onClick={closeMenu}>
        <span className="wordmark-mark">en<span>.</span></span>
        <span className="wordmark-label">EDILSON NANTES</span>
      </a>

      <nav
        id="primary-navigation"
        className={`nav ${menuOpen ? 'nav-open' : ''}`}
        aria-label={text.navLabel}
      >
        {text.nav.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <button
          className="language-toggle mobile-language"
          onClick={() => {
            toggleLanguage();
            closeMenu();
          }}
          aria-label={text.languageToggleLabel}
        >
          {text.languageLabel}
        </button>
      </nav>

      <div className="header-actions">
        <button
          className="language-toggle desktop-language"
          onClick={toggleLanguage}
          aria-label={text.languageToggleLabel}
        >
          {text.languageLabel}
          <span className="language-dot" />
        </button>
        <a className="header-cta" href="#contact">
          {text.primaryCta}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? text.closeLabel : text.menuLabel}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
