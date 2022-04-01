import React from 'react';


import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import img1 from "./assets/actividad3.jpeg"
import Carousel from './components/carousel'

function App() {
  return (
    <div>
        <Carousel 
          images={img1}
        />
    </div>
  );
};
export default App;