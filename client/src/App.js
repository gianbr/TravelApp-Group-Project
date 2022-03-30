import './App.css';
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Details from './components/Details-Package/Details-package'
import Cards from './components/Cards-Package/Cards-Packega'
function App() {
  return (
  
    <div className="w-full h-screen bg-pricing-bg bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4">
     {/*     <Details /> */}
       <Cards
        title="Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales"
        location= "Puerto Iguazú, Misiones"
        price= "15000"
        images="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3a/f6/be.jpg"

       />
      <Cards
        title="Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales"
        location="Puerto Iguazú, Misiones"
        price="15000"
        images="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/19/ba/36.jpg"
      /> <Cards
        title="Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales"
        location= "Puerto Iguazú, Misiones"
        price= "15000"
        images="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3a/f6/c8.jpg"
       />
      <Cards
        title="Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales"
        location="Puerto Iguazú, Misiones"
        price="15000"
        images="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/1e/6c/04.jpg"
      />
      <Cards
        title="Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales"
        location="Puerto Iguazú, Misiones"
        price="15000"
        images="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/1e/6c/04.jpg"
      />
      <Cards
        title="Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales"
        location="Puerto Iguazú, Misiones"
        price="15000"
        images="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/1e/6c/04.jpg"
      />
      </div>

  );
}

export default App;
