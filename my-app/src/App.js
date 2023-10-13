import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;