import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  padding: 50px 2rem;
  background: var(--primary-bg);
  border-top: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  span {
    color: var(--accent-yellow);
    font-weight: 500;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <p>© {new Date().getFullYear()} <span>Seniya Tuscano</span>. Built with passion & modern tech.</p>
    </FooterSection>
  );
}

export default Footer;
