import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';
import NavMenu from './Components/NavMenu.jsx';
import Home from './Components/Pages/Home.jsx';
import About from './Components/Pages/About.jsx';
import MyWorks from './Components/Pages/MyWorks.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/myworks">
            <MyWorks />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
