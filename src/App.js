import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Nav className='nav' />
              <ErrorBoundry>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/blog' component={Blog} />
                  <Route exact path='/shop' component={Shop} />
                  <Route exact path='/contact' component={Contact} />
              </ErrorBoundry> 
        </div>
    </BrowserRouter>
  );
}

export default App;
