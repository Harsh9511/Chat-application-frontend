import React,{Component} from 'react';
import './signup.css';
import 'axios';
import axios from 'axios';
import Signin from '../Signin/signin';

class signup extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:"",
            password:"",
            Repassword:"",
            email:"",
            errormessage:"",
            signup:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        let err = "";
        if(!this.state.username){
                err = <strong>Username is required!</strong>;
        }   
        else if(!this.state.email){
                err = <strong>Email is required!</strong>;
        }
        else if(!this.state.password){
                err = <strong>Password is required!</strong>;
        }
        else if(!this.state.Repassword){
            err = <strong>Please fill all the fields!</strong>;
        }
        else if(this.state.password !== this.state.Repassword){
            err = <strong>Password mismatch!!!</strong>;
        }
        else{
            const user = {
                username:this.state.username,
                email:this.state.email,
                password:this.state.password,
            };
            axios.post('user/register',user).then(
                res => {
                    if(res.data.message.message){
                        console.log(res.data.message.message);
                    }
                    else{
                    console.log(res.data.message,res.data.status,res.data.username);
                    this.setState({signup:true});
                    }
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        }
        this.setState({errormessage:err});
    }

    render()
    {
        if(!this.state.signup){
            return(
                <form className="signup" onSubmit={this.handleSubmit}>

                <label>Your username:
                <input type="text" name="username" onChange={this.handleChange}/>
                </label>

                <label>Your Email:
                <input type="email" name="email" onChange={this.handleChange}/>
                </label>

                <label>Generate a Password:
                <input type="password" name="password" onChange={this.handleChange}/>
                </label>

                <label>Re-Enter the Password:
                <input type="password" name="Repassword" onChange={this.handleChange}/>
                </label>

                <input className="signupbutton" type="submit" value="REGISTER" />
                {this.state.errormessage}
                </form>
            );
        }else{
            return(<Signin />);
        }
    }   
}


export default signup;