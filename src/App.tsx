import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import ProblemsTable from './components/ProblemsTable';
import Contact from './components/Contact';
import FabricsLanding from './pages/FabricsLanding';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <ProblemsTable />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fabrics" element={<FabricsLanding />} />
      </Routes>
    </Router>
  );
}

export default App;