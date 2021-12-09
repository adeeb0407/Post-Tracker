import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>PostTracker</Link>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">PostsList</Link>
                            </li>
                        <li className="nav-item">
                            <Link to='/create' className="nav-link">CreatePost</Link>
                            </li>
                        <li className="nav-item">
                            <Link to='/user' className="nav-link">CreateUser</Link>
                            </li>
                    </ul>
                </div>
            </nav>
        )
    }
}