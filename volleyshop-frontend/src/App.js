import React from 'react';
import './App.css';

import ContentRoute from './route/Conent';
import NavigationRoute from './route/Navigation';
import Footer from './components/footer';

function App() {
  return (
    <div style={{margin: "0!important"}}>
      <NavigationRoute />
      <div class="background-container">
        <ContentRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
