import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Admin = (props) => {

    const {children} = props;

    const handleClickLogout = () => {
        sessionStorage.clear();
        props.history.push('/login');
    }

    useEffect(() => {
        if (sessionStorage.length == 0) {
            props.history.push('/login');
        }
    })

    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="">
                    Start Bootstrap
                </a>
                <button
                    className="btn btn-link btn-sm order-1 order-lg-0"
                    id="sidebarToggle"
                    href="#"
                >
                    <i className="fas fa-bars" />
                </button>
                {/* Navbar Search*/}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Navbar*/}
                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="userDropdown"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fas fa-user fa-fw" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="userDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                Activity Log
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" onClick={handleClickLogout}>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav
                        className="sb-sidenav accordion sb-sidenav-dark"
                        id="sidenavAccordion"
                    >
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <Link className="nav-link" to="/admin">Admin Page</Link>
                                <div className="sb-sidenav-menu-heading">Interface</div>
                                <a
                                    className="nav-link collapsed"
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseLayouts"
                                    aria-expanded="false"
                                    aria-controls="collapseLayouts"
                                >
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-columns" />
                                    </div>
                                    Control Panel
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down" />
                                    </div>
                                </a>
                                <div
                                    className="collapse"
                                    id="collapseLayouts"
                                    aria-labelledby="headingOne"
                                    data-parent="#sidenavAccordion"
                                >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/admin/user-list">Users</Link>
                                        <Link className="nav-link" to="/admin/page">Admin</Link>

                                        {/* <Link className="nav-link" to="/admin/not-found">NotFound</Link> */}
                                        {/* <a className="nav-link" href="tables.html">
                                            Customer{" "}
                                        </a>
                                        <a className="nav-link" href="tables.html">
                                            Cart{" "}
                                        </a>
                                        <a className="nav-link" href="tables.html">
                                            Supplier{" "}
                                        </a> */}
                                    </nav>
                                </div>
                                {/* <a
                                    className="nav-link collapsed"
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapsePages"
                                    aria-expanded="false"
                                    aria-controls="collapsePages"
                                >
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-book-open" />
                                    </div>
                                    Pages
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down" />
                                    </div>
                                </a> */}
                                {/* <div
                                    className="collapse"
                                    id="collapsePages"
                                    aria-labelledby="headingTwo"
                                    data-parent="#sidenavAccordion"
                                >
                                    <nav
                                        className="sb-sidenav-menu-nested nav accordion"
                                        id="sidenavAccordionPages"
                                    >
                                        <a
                                            className="nav-link collapsed"
                                            href="#"
                                            data-toggle="collapse"
                                            data-target="#pagesCollapseAuth"
                                            aria-expanded="false"
                                            aria-controls="pagesCollapseAuth"
                                        >
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down" />
                                            </div>
                                        </a>
                                        <div
                                            className="collapse"
                                            id="pagesCollapseAuth"
                                            aria-labelledby="headingOne"
                                            data-parent="#sidenavAccordionPages"
                                        >
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="login.html">
                                                    Login
                                                </a>
                                                <a className="nav-link" href="register.html">
                                                    Register
                                                </a>
                                                <a className="nav-link" href="password.html">
                                                    Forgot Password
                                                </a>
                                            </nav>
                                        </div>
                                        <a
                                            className="nav-link collapsed"
                                            href="#"
                                            data-toggle="collapse"
                                            data-target="#pagesCollapseError"
                                            aria-expanded="false"
                                            aria-controls="pagesCollapseError"
                                        >
                                            Error
                                            <div className="sb-sidenav-collapse-arrow">
                                                <i className="fas fa-angle-down" />
                                            </div>
                                        </a>
                                        <div
                                            className="collapse"
                                            id="pagesCollapseError"
                                            aria-labelledby="headingOne"
                                            data-parent="#sidenavAccordionPages"
                                        >
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="401.html">
                                                    401 Page
                                                </a>
                                                <a className="nav-link" href="404.html">
                                                    404 Page
                                                </a>
                                                <a className="nav-link" href="500.html">
                                                    500 Page
                                                </a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div> */}
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>

                <div id="layoutSidenav_content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default withRouter (Admin)