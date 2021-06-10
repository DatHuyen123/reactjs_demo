import React , {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import callApi from '../../../utils/ApiCaller'

const Register = (props) => {
    const [name , setName] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [age , setAge] = useState('');
    const [role , setRole] = useState('ROLE_USER')
    const [message , setMessage] = useState('')

    const handleChangeFullName = (event) => {
        setName(event.target.value);
    }

    const hanldeChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleClickCreateAccount = () => {
        createUser({
            username,
            password,
            name,
            age,
            role
        }).then(res => {
            if (res.data) {
                props.history.push('/login')
            }
        }).catch(e => {
            setMessage('faild!')
        })
    }

    const createUser = (user) => {
        return callApi('api/register' , 'POST' , user);
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div class="card-body">
                                        <form>
                                        <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="text" placeholder="fullname" onChange={handleChangeFullName} />
                                                <label for="inputEmail">fullname</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="username" onChange={hanldeChangeUsername} />
                                                <label for="inputEmail">username</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="inputPassword" type="password" placeholder="password" onChange={handleChangePassword} />
                                                        <label for="inputPassword">password</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="inputPasswordConfirm" type="number" placeholder="age" onChange={handleChangeAge} />
                                                        <label for="inputPasswordConfirm">age</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <label>{message}</label>
                                                <div class="d-grid"><a class="btn btn-primary btn-block" onClick={handleClickCreateAccount}>Create Account</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><Link  to="/login">Have an account? Go to login</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Register