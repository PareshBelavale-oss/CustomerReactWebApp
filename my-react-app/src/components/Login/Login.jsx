import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import '../Login/Login.css';


class Login extends Component {

    // routeChange=()=> {
    //     let path = `/facilityRegister`;
    //     let history = useHistory();
    //     history.push(path);
    //   }

    render() {
        return (
            <div>
                
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>

                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" id="username" className="form-control" placeholder="User Name"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Password"/>
                            </div>
                           
                            <button type="button"  id="loginFacility"  onClick={event =>  window.location.href='/auctionDetail'}  className="btn btn-primary">Login</button>
                            <button type="submit" id="loginSubmit" className="btn btn-secondary marginleft10">Register</button>
                        </form>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Login
