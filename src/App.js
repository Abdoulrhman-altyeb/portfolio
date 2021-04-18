import React,{useState, useEffect} from "react";
// packges
import { Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DarkMode from "./components/DarkMode";
import Footer from "./components/Footer";
//pages
import Menu from './pages/Menu'
import Contact from "./pages/Contact";
import About from './pages/About';
import DropDown from "./components/DropDown";




function App() {
  const [page, setPage] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 786 && isActive) {
        setIsActive(false)
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu)
    };
  });




  return (
    <>
      <Navbar setPage={setPage} toggle={toggle} />
      <DropDown setPage={setPage} toggle={toggle} isActive={isActive} />
      <Hero page={page}/>
      <Switch >
        <Route exact path='/'>
          <Menu />
        </Route>
        <Route path='/About'>
          <About  />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
      <DarkMode />

    </>
  )
}

export default App;
