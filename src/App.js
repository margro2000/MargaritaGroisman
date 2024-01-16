import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplitScreen from './SplitScreen';
import Projects from './Projects'; // import your Projects component
import 'semantic-ui-css/semantic.min.css'
import HeroLeft04 from './HeroLeft04';
import { Portfolio } from './portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={ <HeroLeft04 /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/portfolio" element={ <Portfolio /> } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;