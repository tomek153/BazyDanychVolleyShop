import React from 'react';
import './App.css';

import ContentRoute from './route/Conent';
import NavigationRoute from './route/Navigation';
import Footer from './components/footer';

// function test() {
//   document.addEventListener("DOMContentLoaded", function(event) {
//     document.onreadystatechange = function () {
//       var h = document.getElementById("root").offsetHeight;
//       console.log(h);
//       console.log("test");
//     }
//   });
// }

function App() {
  return (
    <div style={{margin: "0!important"}}>
      <NavigationRoute />
      <div class="background-container-my">
        <ContentRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
