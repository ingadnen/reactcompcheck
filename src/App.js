
import React, {Component} from 'react';
import './style.css';
import './reset.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import giif from "./giif.gif";
//import './App.css';


export default class App extends Component{
  render(){
     return ( 
   <div>
        <div className="container">
          <div className="avatar-flip">
           <ProfilePhoto />
            <img src={giif} height={150} width={150} alt="im" />
          </div>
          <h2><FullName/></h2>
          <h4>Software Engineer</h4>
          <p><Address /></p>
          
        </div>
      </div>
       
   );
  }
}