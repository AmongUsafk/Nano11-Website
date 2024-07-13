import React, { useState } from 'react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { DefaultButton, Stack, Text, Link, Nav, TextField, Icon } from '@fluentui/react';
import './App.css';

initializeIcons();

const navStyles = {
  root: {
    width: 300,
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups = [
  {
    links: [
      {
        name: 'Home',
        url: '#home',
        key: 'key1',
      },
      {
        name: 'Features',
        url: '#features',
        key: 'key2',
      },
      {
        name: 'Download',
        url: '#download',
        key: 'key3',
      },
      {
        name: 'Community',
        url: '#community',
        key: 'key4',
      },
      {
        name: 'Support',
        url: '#support',
        key: 'key5',
      },
    ],
  },
];

const App = () => (
  <div>
    <header className="header">
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center" className="header-content">
        <Text variant="xLarge" className="logo">Nano11</Text>
        <Nav styles={navStyles} groups={navLinkGroups} />
      </Stack>
    </header>

    <section id="home" className="hero">
      <Stack horizontalAlign="center" verticalAlign="center" className="hero-content">
        <Text variant="xxLarge" className="hero-title">Welcome to the Future of Windows 11</Text>
        <Text variant="large" className="hero-subtitle">Experience the power of Nano11 - Debloated. Superlite. Faster.</Text>
        <DefaultButton text="Download Now" href="#download" className="download-button" />
      </Stack>
    </section>

    <section id="features" className="features">
      <Stack horizontal tokens={{ childrenGap: 20 }} horizontalAlign="center">
        <FeatureCard icon="Globe" title="Feature 1" description="Description of Feature 1" />
        <FeatureCard icon="Rocket" title="Feature 2" description="Description of Feature 2" />
        <FeatureCard icon="SpeedHigh" title="Feature 3" description="Description of Feature 3" />
      </Stack>
    </section>

    <section id="community" className="community">
      <Stack horizontalAlign="center" tokens={{ padding: 20 }}>
        <Stack horizontal horizontalAlign="center" tokens={{ childrenGap: 20 }}>
          <Testimonial text="Testimonial 1" />
          <Testimonial text="Testimonial 2" />
          <Testimonial text="Testimonial 3" />
        </Stack>
        <DefaultButton text="Join Community" href="#community" className="join-community-button" />
      </Stack>
    </section>

    <section id="download" className="download">
      <Stack horizontalAlign="center" tokens={{ padding: 20 }}>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <VersionCard version="1.0" description="Brief description of Version 1.0" />
          <VersionCard version="2.0" description="Brief description of Version 2.0" />
        </Stack>
        <Text variant="large">Requirements</Text>
        <ul className="requirements-list">
          <li>Requirement 1</li>
          <li>Requirement 2</li>
          <li>Requirement 3</li>
        </ul>
        <DefaultButton text="Download" href="#download" className="download-button" />
      </Stack>
    </section>

    <section id="support" className="support">
      <Stack horizontalAlign="center" tokens={{ padding: 20 }}>
        <Faq question="Question 1" answer="Answer to Question 1" />
        <Faq question="Question 2" answer="Answer to Question 2" />
        <TextField label="Your Name" placeholder="Your Name" />
        <TextField label="Your Email" placeholder="Your Email" />
        <TextField label="Your Message" multiline rows={4} placeholder="Your Message" />
        <DefaultButton text="Submit" className="submit-button" />
        <DefaultButton text="Chat with Us" href="#support" className="chat-button" />
      </Stack>
    </section>

    <footer className="footer">
      <Stack horizontalAlign="center" tokens={{ padding: 20 }}>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Link href="#home">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#download">Download</Link>
          <Link href="#community">Community</Link>
          <Link href="#support">Support</Link>
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 20 }}>
          <Link href="#facebook">Facebook</Link>
          <Link href="#twitter">Twitter</Link>
          <Link href="#instagram">Instagram</Link>
        </Stack>
        <Stack horizontal tokens={{ childrenGap: 10 }}>
          <TextField placeholder="Your Email" />
          <DefaultButton text="Sign Up" className="signup-button" />
        </Stack>
      </Stack>
    </footer>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <Stack tokens={{ childrenGap: 10 }} className="feature-card">
    <Icon iconName={icon} className="feature-icon" />
    <Text variant="large">{title}</Text>
    <Text>{description}</Text>
  </Stack>
);

const Testimonial = ({ text }) => (
  <Stack className="testimonial">
    <Text>{text}</Text>
  </Stack>
);

const VersionCard = ({ version, description }) => (
  <Stack tokens={{ childrenGap: 10 }} className="version-card">
    <Text variant="large">{version}</Text>
    <Text>{description}</Text>
  </Stack>
);

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack tokens={{ childrenGap: 10 }} className="faq" onClick={() => setIsOpen(!isOpen)}>
      <Text variant="large">{question}</Text>
      {isOpen && <Text>{answer}</Text>}
    </Stack>
  );
};

export default App;
