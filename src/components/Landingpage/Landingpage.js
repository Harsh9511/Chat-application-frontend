import React,{Component} from 'react';
import './Landingpage.css';
import {Link} from 'react-router-dom';
import Signin from '../Signin/signin';

class Landingpage extends Component{

  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="Loading">
        <div className="square">
            <span></span>
            <span></span>
            {/* <img src="./Snake-app-Icon.png" alt="Avatar"></img> */}
            <img src="./SnakeLogo.gif" alt="gif"></img>
            <span></span>
            <span></span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="para">
            <p>SNAKEBITE</p>
        </div>
        <br></br>
        <br></br>
        {/* <Link className="buttons" to={'/signin'}>LOG IN</Link>
        <Link className="buttons" to={'/signup'}>REGISTER</Link> */}
        <br></br>
        <div className="accessSnake"><Signin></Signin>
        <p className="para2">New user? Register now for free!<br></br>
        <Link className="buttons" to={'/signup'}>REGISTER</Link>
        </p>
        </div>
        <div>
        </div>
      </div>
  );
  } 
}

export default Landingpage;
