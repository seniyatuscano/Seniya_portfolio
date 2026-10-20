import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FiFolder,
  FiBriefcase,
  FiCpu,
  FiUser,
  FiMail,
  FiFileText,
  FiSearch,
} from 'react-icons/fi';
import { scroller } from 'react-scroll';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(8, 9, 9, 0.45);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 14vh;
  padding-left: 1rem;
  padding-right: 1rem;
  animation: fadeIn 0.15s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  width: 100%;
  max-width: 580px;
  background: #ffffff;
  border: 1px solid var(--rule-strong);
  border-radius: var(--radius-card);
  box-shadow: 0 25px 60px rgba(8, 9, 9, 0.18);
  overflow: hidden;
  font-family: var(--font-body);
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--rule);
  color: var(--foreground);

  svg {
    color: var(--foreground);
    font-size: 1.2rem;
  }
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--foreground);
  font-size: 1rem;
  font-family: var(--font-body);

  &::placeholder {
    color: var(--foreground-subtle);
  }
`;

const Kbd = styled.kbd`
  padding: 3px 6px;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  background: var(--background-badge);
  border: 1px solid var(--rule);
  border-radius: var(--radius-sm);
  color: var(--foreground-muted);
`;

const ResultsList = styled.div`
  max-height: 320px;
  overflow-y: auto;
  padding: 8px;
`;

const Item = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  background: ${(props) => (props.selected ? 'var(--background-badge)' : 'transparent')};
  color: var(--foreground);
  font-size: 0.9rem;
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    background: var(--background-badge);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      color: var(--foreground);
    }
  }

  .tag {
    font-size: 0.75rem;
    font-family: var(--font-body);
    color: var(--foreground-muted);
  }
`;

const Footer = styled.div`
  padding: 10px 20px;
  background: var(--background-badge);
  border-top: 1px solid var(--rule);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--foreground-muted);
  font-family: var(--font-body);
`;

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    {
      title: 'Navigate to Experience Track',
      tag: 'Section',
      icon: <FiBriefcase />,
      perform: () => scroller.scrollTo('experience', { smooth: true, duration: 400 }),
    },
    {
      title: 'Navigate to In the lab (Tech Stack)',
      tag: 'Section',
      icon: <FiCpu />,
      perform: () => scroller.scrollTo('techstack', { smooth: true, duration: 400 }),
    },
    {
      title: 'Navigate to Made (Projects)',
      tag: 'Section',
      icon: <FiFolder />,
      perform: () => scroller.scrollTo('projects', { smooth: true, duration: 400 }),
    },
    {
      title: 'Navigate to Story (Engineering Profile)',
      tag: 'Section',
      icon: <FiUser />,
      perform: () => scroller.scrollTo('about', { smooth: true, duration: 400 }),
    },
    {
      title: 'Say hey / Contact',
      tag: 'Section',
      icon: <FiMail />,
      perform: () => scroller.scrollTo('contact', { smooth: true, duration: 400 }),
    },
    {
      title: 'Download Resume (PDF)',
      tag: 'External',
      icon: <FiFileText />,
      perform: () => {
        window.open(
          'https://drive.google.com/file/d/12iXsB0gMB5s4NqMNUeia8mB82WvmcZLt/view?usp=sharing',
          '_blank'
        );
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (onClose) {
          onClose(!isOpen);
        }
      }
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop onClick={() => onClose(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <SearchBar>
          <FiSearch />
          <Input
            autoFocus
            type="text"
            placeholder="Type a section or action..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <Kbd>ESC</Kbd>
        </SearchBar>
        <ResultsList>
          {filtered.length === 0 ? (
            <div style={{ padding: '16px', color: 'var(--foreground-muted)', textAlign: 'center' }}>
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <Item
                key={item.title}
                selected={idx === selectedIndex}
                onClick={() => {
                  item.perform();
                  onClose(false);
                }}
              >
                <div className="left">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <span className="tag">{item.tag}</span>
              </Item>
            ))
          )}
        </ResultsList>
        <Footer>
          <span>Use &uarr; &darr; to navigate</span>
          <span>ESC to close</span>
        </Footer>
      </Modal>
    </Backdrop>
  );
};

export default CommandPalette;
