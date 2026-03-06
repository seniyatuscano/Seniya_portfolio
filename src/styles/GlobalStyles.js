import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-bg: #000000;
    --secondary-bg: #111111;
    --accent-purple: #8a2be2;
    --accent-yellow: #fadb14;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-blur: blur(15px);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: var(--primary-bg);
    color: var(--text-primary);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  section {
    padding: 100px 0;
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--primary-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-purple);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a04ef6;
  }
`;

export default GlobalStyles;
