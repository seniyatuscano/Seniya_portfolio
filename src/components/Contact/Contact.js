import React, { useState } from "react";
import styled from "styled-components";
import { FiMail, FiCopy, FiCheck, FiSend, FiMapPin, FiClock } from "react-icons/fi";

const ContactSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 100px 24px;
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;
`;

const Eyebrow = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--foreground);
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--foreground-muted);
  max-width: 600px;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 24px;

  @media (max-width: 860px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ChannelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChannelCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .icon-box {
    width: 42px;
    height: 42px;
    border-radius: var(--radius-sm);
    background: var(--background-badge);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--foreground);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .label {
      font-size: 0.75rem;
      font-family: var(--font-mono);
      color: var(--foreground-subtle);
      text-transform: uppercase;
    }

    .address {
      font-size: 0.95rem;
      color: var(--foreground);
      font-weight: 600;
      font-family: var(--font-mono);
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  background: var(--background-badge);
  border: 1px solid var(--rule);
  color: ${(props) => (props.copied ? "var(--color-success)" : "var(--foreground)")};
  font-size: 0.8rem;
  font-family: var(--font-mono);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
  }
`;

const SendLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: var(--foreground);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const InfoCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);

  h4 {
    font-family: var(--font-display);
    font-size: 1.15rem;
    color: var(--foreground);
    font-weight: 900;
  }

  p {
    font-family: var(--font-body);
    font-size: 0.92rem;
    color: var(--foreground-muted);
    line-height: 1.6;
  }

  .meta-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 16px;
    border-top: 1px solid var(--rule);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--foreground-muted);

    svg {
      color: var(--foreground);
    }
  }
`;

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyEmail = (email, key) => {
    navigator.clipboard.writeText(email);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 1800);
  };

  return (
    <ContactSection id="contact">
      <SectionHeader>
        <Eyebrow>Direct Communication</Eyebrow>
        <Title>Let’s Build Something Meaningful</Title>
        <Subtitle>
          I’m actively looking for software engineering, cloud, and applied AI roles. Reach out directly.
        </Subtitle>
      </SectionHeader>

      <ContactGrid>
        <ChannelsList>
          <ChannelCard>
            <div className="left">
              <div className="icon-box">
                <FiMail size={18} />
              </div>
              <div className="info">
                <span className="label">Primary Engineering Email</span>
                <span className="address">seniyatuscano3110@gmail.com</span>
              </div>
            </div>
            <div className="actions">
              <CopyButton
                type="button"
                copied={copiedKey === "personal"}
                onClick={() => copyEmail("seniyatuscano3110@gmail.com", "personal")}
                aria-label="Copy Personal Email"
              >
                {copiedKey === "personal" ? <FiCheck size={13} /> : <FiCopy size={13} />}
                <span>{copiedKey === "personal" ? "Copied" : "Copy"}</span>
              </CopyButton>
              <SendLink href="mailto:seniyatuscano3110@gmail.com">
                <span>Send</span>
                <FiSend size={12} />
              </SendLink>
            </div>
          </ChannelCard>

          <ChannelCard>
            <div className="left">
              <div className="icon-box">
                <FiMail size={18} />
              </div>
              <div className="info">
                <span className="label">University Academic Email</span>
                <span className="address">sxt3855@mavs.uta.edu</span>
              </div>
            </div>
            <div className="actions">
              <CopyButton
                type="button"
                copied={copiedKey === "uta"}
                onClick={() => copyEmail("sxt3855@mavs.uta.edu", "uta")}
                aria-label="Copy University Email"
              >
                {copiedKey === "uta" ? <FiCheck size={13} /> : <FiCopy size={13} />}
                <span>{copiedKey === "uta" ? "Copied" : "Copy"}</span>
              </CopyButton>
              <SendLink href="mailto:sxt3855@mavs.uta.edu">
                <span>Send</span>
                <FiSend size={12} />
              </SendLink>
            </div>
          </ChannelCard>
        </ChannelsList>

        <InfoCard>
          <div>
            <h4>Location &amp; Availability</h4>
            <p>
              Based in the Dallas-Fort Worth metroplex (Arlington, TX). Open to local hybrid roles in DFW or remote software engineering positions across the US.
            </p>
          </div>

          <div className="meta-items">
            <div className="meta-item">
              <FiMapPin />
              <span>Arlington, TX — United States</span>
            </div>
            <div className="meta-item">
              <FiClock />
              <span>Central Standard Time (CST / UTC-6)</span>
            </div>
          </div>
        </InfoCard>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact;
