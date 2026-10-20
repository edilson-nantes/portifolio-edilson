import { useState } from 'react';
import Header from './components/Header.jsx';
import { content } from './data/content.js';
import './App.css';

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
    </div>
  );
}

export default App;
