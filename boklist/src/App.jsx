import React, { useEffect, useState} from 'react'
import './App.css'
import './index.css'
import Card from './Card.jsx'
import Brad from './assets/Brad_Taylor.png'
import Elixer from './assets/Elixer_Project.png'
import Storm from './assets/The_Cold_Storm.png'

function App() {
 // Use ( window.location.href ) for external navigation.
 //Use ( useNavigate() ) for internal app routing within your React application.
  const routeChange = () => {
    let path = "https://www.amazon.com/One-Rough-Man-Thriller-Logan-ebook/dp/B00475ARQG";
    window.location.href = path; // This will navigate to an external link
  };
  const routeChange2 = () => {
    let path2 = "https://www.amazon.com/Elixir-Project-Kary-Oberbrunner/dp/194352615X";
    window.location.href = path2; // This will navigate to an external link
  };
  const routeChange3 = () => {
    let path3 = "https://www.amazon.com/Cold-Storm-Special-action-thriller-Roger-ebook/dp/B07T8QHXFF";
    window.location.href = path3; // This will navigate to an external link
  };

  var random = 0;
  
  return(
    <>
  <div className="youtube">
    <div id='btn1'>
     <button>View More Books</button>
    </div>
     <h2>This is a List of books i would like to read</h2>
  </div> 
  
  <div className="book">
    <div style={{marginTop: '30px'}}>
    <Card className="crd1" img={Brad} title="Brad Taylor" about="a book"/>
    <p className="par">I really wanted to read this book</p>
    </div>
    <button onClick={routeChange} className="btn" style={{marginTop: '10px'}}>View more about the book</button>
  </div>

  <div className="book2">
    <div style={{marginTop: '30px'}}>
    <Card className="crd2" img={Elixer} title="Elixer Project" about="some female i know nothing about"/>
    <p className="par">I really wanted to read this book</p>
    </div>
    <button onClick={routeChange2} className="btn" style={{marginTop: '10px'}}>View more about the book</button>
  </div>

  <div className="book3">
    <div style={{marginTop: '30px'}}>
    <Card className="crd3" img={Storm} title="The Cold Storm" about="A war that breaks out in the cold winter"/>
    <p className="par">I really wanted to read this book</p>
    </div>
    <button onClick={routeChange3} className="btn" style={{marginTop: '10px'}}>View more about the book</button>
  </div>


    </>
  );

};

export default App
