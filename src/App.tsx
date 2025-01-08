import './App.css';
// import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import ShowProjects from './components/Projects/ShowProjects';
import Resume from './components/Resume/Reseume';
import NotFound from './components/NotFound';
import ShowCourses from './components/Courses/ShowCourses';
import { Routes, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/projects" element={<ShowProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/courses" element={<ShowCourses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
