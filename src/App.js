//notifications
import {ReactNotifications} from 'react-notifications-component';
//Navigation bar
import Nav from "./components/nav.jsx";
//Routes
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
//React router dom
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';

function App() {
  return (
    <div>
      <ReactNotifications/>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about-me" element={<About/>}/>
          <Route path="/my-projects" element={<Projects/>}/>
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
