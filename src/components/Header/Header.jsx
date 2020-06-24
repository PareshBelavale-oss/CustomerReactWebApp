import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import '../Header/Header.css'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                    <Link to="/" className="acolor navbar-brand">TEST</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav pull-right">
                        <li className="nav-item">
                                <Link to="/facilityRegister" className="acolor nav-link"> TEST Registeration </Link>
                        </li>
                        <li className="nav-item">
                                <Link to="/auctionDetail" className="acolor nav-link">CUSTOMER Detail</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>     */}
                        </ul>
                    </div>  
                </nav>
            </div>
        )
    }
}

export default Header
