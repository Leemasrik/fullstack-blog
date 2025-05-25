//import Animation from '../components/Animation';
import { Router,Routes,Route } from 'react-router-dom';
import Animation from '../components/Animation';
import Contacts from '../components/Contacts';
import Extra from '../components/Extra';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import About from '../components/About';
const Landing = () => {
  return (
    <div>
      <Navbar />
      <section id="animation">
         <Animation />
      </section>
     
     
  
      <section id="extra">
        <Extra />
      </section>
         <Projects />
      <section id="about">
        <About/>
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
};


export default Landing;
