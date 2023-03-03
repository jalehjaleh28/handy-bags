import React from 'react';
import './App.css';
import Button from './components/Button';

import Product from './components/Product';
import bag1 from "./assets/bag_1.png"
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from './components/Tile';


function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>      
       <Button type="button" disabled="" text="to the collection"/>  
       <Button type="button" disabled="" text="shop all-bages"/>  
       <Button type="button" disabled="disabled" text="pre-orders"/>  
      </nav>

      <main>
      <Product  img={bag1} lable="Best seller" title="handy bag" price="300" />
      <Product  img={bag2} lable="Best seller" title="The simple bag" price="250" />
      <Product  img={bag3} lable="new collection" title="The stylish bag" price="130" />
      <Product  img={bag4} lable="new collection" title="beautiful bag" price="420" />
      </main>

     <footer>
      <Tile    
        title="Our story" 
        text="hey hier is oure brand we aereally happy that you are oure customer hey hier 
        is oure brand we aereally happy that you are oure customer"  
      />
      <Tile     
        pic={brand}
      />
      <Tile     
       pic={our_story}
      />
      

      <Tile    
        title="The brand" 
        text="hey hier is oure brand we aereally happy that you are oure customerhey hier
        is oure brand we aereally happy that you are oure customer"   
       />

      
     
     

     
     
     
    
      </footer>
    </>
  );
}

export default App;


