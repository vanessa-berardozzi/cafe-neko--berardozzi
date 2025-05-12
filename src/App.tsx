import Container from '@mui/material/Container';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AboutSection from './components/aboutSection/AboutSection';

import './App.css';

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Hero />
      <AboutSection />
    </Container>
  );
}

export default App;
