import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';
// import  './app.css'

import StarRating from './StarRate'
import App_v2 from './App_v2';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Test(){
  const [movieRating,setMovieRating] = useState(0)
  return(
    <div>
      <StarRating color="cyan" maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} stars</p>
    </div> 
  )
}
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App_v2/>
    {/* <StarRating maxRating= {5} messages={["Terrible","Bad","Okay","Good","Amzaing"]}/>
    <StarRating color="red"size={16} className="box" defaultRating={3}/>
    <Test/> */}
  </React.StrictMode>
);

