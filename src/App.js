import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Header/Footer';
import ShowProjects from './components/Projects/ShowProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-screen">
        <ShowProjects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
