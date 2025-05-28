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
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            {/* First Email */}
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <span>pkn4111@mavs.uta.edu</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={copiedEmail === "sxt3855@mavs.uta.edu" && showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={() => copyToClipboard("sxt3855@mavs.uta.edu")}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:sxt3855@mavs.uta.edu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginTop: "10px", // Space between email and button
                }}
              >
                Send Email
              </a>
            </Email>

            {/* Second Email */}
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>seniyatuscano3110@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={copiedEmail === "seniyatuscano3110@gmail.com" && showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={() => copyToClipboard("seniyatuscano3110@gmail.com")}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:seniyatuscano3110@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginTop: "10px", // Space between email and button
                }}
              >
                Send Email
              </a>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;