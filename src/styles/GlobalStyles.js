import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DMSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Epilogue';
    src: url('/fonts/Epilogue-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --background: #dfe4f2;
    --background-mobile: #f0eefa;
    --background-card: #ffffff;
    --background-badge: #f7f8fa;
    --foreground: #080909;
    --foreground-muted: rgba(8, 9, 9, 0.68);
    --foreground-subtle: rgba(8, 9, 9, 0.45);
    --rule: rgba(8, 9, 9, 0.12);
    --rule-strong: rgba(8, 9, 9, 0.28);
    --color-accent: #080909;
    --color-accent-dim: rgba(8, 9, 9, 0.06);

    /* Studio Palette Mappings for existing components */
    --color-bg: var(--background);
    --color-paper: #ffffff;
    --color-paper-2: #f7f8fa;
    --color-paper-3: #eceef5;
    --color-ink: #080909;
    --color-ink-2: rgba(8, 9, 9, 0.72);
    --color-ink-3: rgba(8, 9, 9, 0.48);
    --color-rule: rgba(8, 9, 9, 0.12);
    --color-rule-active: rgba(8, 9, 9, 0.35);
    --color-accent-ink: #ffffff;
    --color-danger: #d9383a;
    --color-success: #107e3e;
    --color-warn: #b45309;

    font-family: 'DM Sans', Arial, sans-serif;
    font-weight: 400;
    color: var(--foreground);
    background: var(--background);
    font-synthesis: none;

    --font-display: 'Epilogue', Arial, sans-serif;
    --font-body: 'DM Sans', Arial, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    --radius-sm: 6px;
    --radius-card: 16px;
    --radius-pill: 100px;

    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --dur-short: 180ms;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    min-height: 100vh;
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: clip;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 900;
    font-style: normal;
    color: var(--foreground);
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  p {
    color: var(--foreground-muted);
  }

  code, pre, .font-mono {
    font-family: var(--font-mono);
    font-variant-numeric: tabular-nums;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity var(--dur-short) var(--ease-out);
  }

  a:focus-visible, button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  section {
    padding: 100px 0;
    position: relative;
  }

  @media (max-width: 700px) {
    :root {
      --background: #f0eefa;
    }
    body {
      background: var(--background);
    }
    section {
      padding: 60px 0;
    }
  }

  /* Exact Authoritative Studio Classes */
  .footer {
    position: relative;
    min-height: 100vh;
    padding-top: max(6.54vw, 84px);
    isolation: isolate;
    overflow: hidden;
  }

  .jobs {
    margin-left: 8.65vw;
    width: 25vw;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    border-radius: 100px;
    background: #f7f8fa;
    padding: 0.39vw 0.61vw;
    font-size: 0.88vw;
    line-height: 1.2;
    height: 1.9vw;
    white-space: nowrap;
    color: var(--foreground);
    font-family: var(--font-body);
  }

  .headline {
    font-family: Epilogue, Arial, sans-serif;
    font-weight: 900;
    font-size: 1.66vw;
    line-height: 1.2;
    letter-spacing: 0;
    color: var(--foreground);
  }

  .job-title {
    display: block;
    margin-top: 1.45vw;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.93vw;
    margin-top: 1.3vw;
    font-size: 1.075vw;
    line-height: 1.35;
    font-family: var(--font-body);
  }

  .footer-nav span, .footer-nav a {
    color: var(--foreground);
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .footer-nav span:hover, .footer-nav a:hover {
    opacity: 0.6;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: max(7.7vw, 92px);
    width: 17vw;
    max-width: 230px;
    color: var(--foreground);
    z-index: 2;
  }

  .logo svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .contact {
    position: absolute;
    right: 8.65vw;
    left: auto;
    top: max(6.54vw, 84px);
    width: 25vw;
    max-width: 340px;
    z-index: 5;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.45vw;
    white-space: normal;
  }

  .note {
    margin: 1.05vw 0 0;
    font-size: clamp(11px, 0.733vw, 13px);
    line-height: 1.45;
    white-space: normal;
    color: var(--foreground);
    font-family: var(--font-body);
    max-width: 100%;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 1.43vw;
    margin-top: 1.61vw;
  }

  .socials span, .socials a, .socials img {
    display: block;
    width: clamp(28px, 1.71vw, 35px);
    height: clamp(28px, 1.71vw, 35px);
  }

  .footer-background {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  .footer-background video {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1100px) and (min-width: 769px) {
    .jobs {
      margin-left: 4.5vw;
      width: 28vw;
    }
    .contact {
      right: 4.5vw;
      width: 28vw;
      max-width: 310px;
    }
    .headline {
      font-size: clamp(17px, 1.7vw, 24px);
    }
  }

  @media (max-width: 768px) {
    .footer {
      display: flex;
      flex-direction: column;
      gap: 28px;
      min-height: 100svh;
      padding: 36px 20px 0;
      background: var(--background);
      overflow-x: clip;
    }
    .logo {
      position: static;
      order: 0;
      align-self: flex-start;
      width: 190px;
      max-width: 70%;
      margin-bottom: 0;
      transform: none;
    }
    .jobs {
      order: 1;
      margin: 0;
      width: 100%;
    }
    .tag {
      height: 28px;
      padding: 4px 12px;
      font-size: 13px;
    }
    .headline {
      font-size: clamp(20px, 5.8vw, 28px);
      line-height: 1.25;
    }
    .job-title, .contact-links {
      margin-top: 14px;
    }
    .footer-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 16px;
      margin-top: 16px;
      font-size: 16px;
      line-height: 1.4;
    }
    .footer-nav span, .footer-nav a {
      display: flex;
      align-items: center;
      min-height: 40px;
    }
    .contact {
      position: static;
      order: 2;
      width: 100%;
      right: auto;
      top: auto;
      max-width: 100%;
    }
    .contact-links {
      gap: 4px;
      margin-top: 14px;
      white-space: normal;
    }
    .note {
      max-width: 100%;
      margin: 12px 0 0;
      font-size: 13px;
      line-height: 1.5;
      white-space: normal;
    }
    .socials {
      gap: 16px;
      margin-top: 16px;
    }
    .socials span, .socials a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
    }
    .socials img {
      width: 28px;
      height: 28px;
    }
    .socials span:first-child, .socials a:first-child {
      margin-left: 0;
    }
    .footer-background {
      position: relative;
      inset: auto;
      order: 3;
      z-index: auto;
      flex: none;
      align-self: center;
      width: calc(100% + 40px);
      aspect-ratio: 4/3;
      margin-top: -8px;
    }
    .footer-background video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  /* Custom scrollbars matching lavender studio palette */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--background);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(8, 9, 9, 0.2);
    border-radius: var(--radius-pill);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(8, 9, 9, 0.4);
  }
`;

export default GlobalStyles;
