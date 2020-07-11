import React from 'react';
import './App.css';
import Header from './componets/home';
import Footer from './componets/footer';



function App() {
  return (
    <div className="body-container">
      <Header/>
        <div>
          <h2>some text content</h2>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
