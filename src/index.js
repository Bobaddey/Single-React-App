import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/nav';
import Image from './Components/Image';
import Profile from './Components/Profile';
import Details from './Components/details';
import './index.css';

const style = {
  display: "flex",
  padding:"20px 0",
  fontSize:"30px",
  justifyContent: "space-between",
  borderBottom:"0.5px solid grey",
  marginBottom: "30px"
}

function Bookcart(){
  return (
    <>
        <section>
          <div style={style}>Settings</div>
          <Nav/>
          <Profile className="items"/>
          <Image className="items"/>
          <Details/>
        </section>
        

      
    </>
)
  
}

ReactDOM.render(<Bookcart />,document.getElementById('root'));
