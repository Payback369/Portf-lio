import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy Load heavy components
const TechStack = React.lazy(() => import('./components/TechStack'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));
const ChatWidget = React.lazy(() => import('./components/ChatWidget'));
const Footer = React.lazy(() => import('./components/Footer'));
const About = React.lazy(() => import('./components/About'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center p-20">
    <div className="w-8 h-8 border-4 border-[#39ff14] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <TechStack />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ChatWidget />
      </Suspense>
    </div>
  );
}

export default App;
