import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        window.onscroll = () => {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        }
        return (
            <main className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light ps-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Főoldal</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/services">Szolgáltatások</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">Kapcsolatok</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="progress-container">
                    <div id="progressBar"></div>
                </div>
            </main>
        )
    }
}