# Portfólio — Edilson Nantes

Portfólio pessoal de **Edilson Nantes**, desenvolvedor de software. O site apresenta sua experiência, serviços, competências e formas de contato, em português e inglês.

## Sobre o projeto

Uma página responsiva feita para apresentar a trajetória profissional e facilitar o contato para projetos e oportunidades. O conteúdo é organizado em seções:

- Apresentação e perfil profissional
- Serviços e processo de trabalho
- Projetos e experiência
- Formação e tecnologias
- Contato por e-mail, WhatsApp, LinkedIn e GitHub

O seletor no cabeçalho alterna o idioma entre português e inglês. O site também inclui navegação adaptada a dispositivos móveis e animações que respeitam a preferência do sistema por movimento reduzido.

## Tecnologias

- React
- Vite
- JavaScript (JSX)
- CSS
- Lucide React e React Icons

## Como executar

Você precisa ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

O Vite informa no terminal o endereço local para abrir no navegador.

### Outros comandos

```bash
npm run lint     # verifica o código com ESLint
npm run build    # gera a versão de produção em dist/
npm run preview  # serve localmente a versão gerada
```

Execute `npm run build` antes de `npm run preview`.

## Estrutura

```text
src/
├── assets/           # imagens e recursos visuais
├── components/       # componentes reutilizáveis, como o cabeçalho
├── data/
│   ├── content.jsx   # textos do portfólio em português e inglês
│   └── contact.js    # e-mail e links de contato
├── App.jsx           # estrutura principal da página
├── App.css           # estilos da página
└── index.css         # estilos globais
```

## Atualizar conteúdo e contato

- Edite `src/data/content.jsx` para alterar os textos, projetos, experiência ou competências. Mantenha os conteúdos `pt` e `en` alinhados.
- Edite `src/data/contact.js` para atualizar e-mail, WhatsApp, LinkedIn ou GitHub.
- A imagem principal está em `src/assets/hero.png`.

Depois das alterações, confira o resultado com `npm run dev` e valide a compilação com `npm run build`.
