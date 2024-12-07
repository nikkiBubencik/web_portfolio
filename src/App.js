// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import ShowProjects from './components/Projects/ShowProjects';
import Resume from './components/Resume/Reseume';
import Cs601 from './components/Cs601/CS601';
import NotFound from './components/NotFound';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/projects" element={<ShowProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cs601" element={<Cs601 />} />
          <Route path="/photos" element={<PhotoGallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
