import React, {useState} from 'react';
import Base from '../core/Base';
import {signup} from '../auth/helper/index';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false,
    })

    const {name, email, password, error , success} = values

    const handleChange = name => event => {
        setValues({ ...values, error:false, [name]:event.target.value })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setValues({
            ...values,
            error:false,
        })
        signup({name,email,password})
        .then( data =>{
            console.log(data);
            if(data.email === email){
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    success:true,
                })
            } else{
                setValues({
                    ...values,
                    error:true,
                    success:false,
                })
            }
        }
        )
        .catch(err =>{console.log(err);})


    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                    style={{display: success ? "" : "none"}}
                    >
                        Your Account has been created! Please <Link to='/signin'> Login Now. </Link> 
                    </div>
                </div>
            </div>
        )
    }

    
    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                    style={{display: error ? "" : "none"}}
                    >
                        Please check all the fields
                    </div>
                </div>
            </div>
        )
    }

    const signUpForm =() =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-dark">Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={handleChange('name')}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Email</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            value={email}
                            onChange={handleChange('email')}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Password</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            value={password}
                            onChange={handleChange('password')}
                            />
                        </div>
                            <button 
                            onClick={handleSubmit}
                            className="btn btn-success btn-block"
                            >
                            Submit</button>
                    </form>
                </div>
            </div>
        )
    };

    return ( 
        <Base title="Signup Page" description="Signup for T-shirts">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
     );
}
 
export default Signup;