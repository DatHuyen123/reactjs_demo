import React, { useState } from 'react';
import './Login.css';
import callAPI from "../../utils/ApiCaller";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

async function loginUser(credentials) {
    return callAPI('login', 'POST', JSON.stringify(credentials)).then(res => res.data)
}


function setToken(userToken , roles) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('roles', JSON.stringify(roles));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

const Login = (props) => {

    const token = getToken();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const tokenRes = await loginUser({
            username,
            password
        });
        console.log(tokenRes.access_token);
        setToken(tokenRes.access_token , tokenRes.roles);
        if (tokenRes.access_token) {
            props.history.push('/admin')
        }
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" placeholder="username" onChange={e => {setUserName(e.target.value)}}/>
                                                <label for="inputEmail">username</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" type="password" placeholder="Password" onChange={e => {setPassword(e.target.value)}} />
                                                <label for="inputPassword">password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <button type="submit" class="btn btn-primary" href="index.html">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><Link  to="/register">Need an account? Sign up!</Link><a href="register.html"></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Login