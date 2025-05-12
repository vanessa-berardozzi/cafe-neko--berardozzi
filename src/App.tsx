import Container from '@mui/material/Container';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutSection from './components/aboutSection/AboutSection';
import OurValues from './components/OurValues/OurValues';

import './App.css';

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Hero />
      <AboutSection />
      <OurValues />
    </Container>
  );
}

export default App;
