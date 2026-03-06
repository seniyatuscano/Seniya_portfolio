import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState("");

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <ScrollAnimation animateIn="fadeIn">
        <h2>Get In Touch</h2>
        <div className="BigCard">
          {/* University Email */}
          <Email>
            <span>sxt3855@mavs.uta.edu</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Tooltip
                PopperProps={{ disablePortal: true }}
                open={copiedEmail === "sxt3855@mavs.uta.edu" && showTooltip}
                onClose={() => setShowTooltip(false)}
                title="Copied!"
                TransitionComponent={Zoom}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="top"
              >
                <IconButton onClick={() => copyToClipboard("sxt3855@mavs.uta.edu")}>
                  <MdContentCopy size={22} style={{ color: "var(--accent-purple)" }} />
                </IconButton>
              </Tooltip>
              <a
                className="btn PrimaryBtn"
                href="mailto:sxt3855@mavs.uta.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </div>
          </Email>

          {/* Personal Email */}
          <Email>
            <span>seniyatuscano3110@gmail.com</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Tooltip
                PopperProps={{ disablePortal: true }}
                open={copiedEmail === "seniyatuscano3110@gmail.com" && showTooltip}
                onClose={() => setShowTooltip(false)}
                title="Copied!"
                TransitionComponent={Zoom}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="top"
              >
                <IconButton onClick={() => copyToClipboard("seniyatuscano3110@gmail.com")}>
                  <MdContentCopy size={22} style={{ color: "var(--accent-purple)" }} />
                </IconButton>
              </Tooltip>
              <a
                className="btn PrimaryBtn"
                href="mailto:seniyatuscano3110@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </div>
          </Email>
        </div>
      </ScrollAnimation>
    </ContactWrapper>
  );
}

export default Contact;
