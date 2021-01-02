import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <header className="header">
<ul className="ul-header">
    <li className="li-header"> <Link to="/"><span className="header-span">Home</span> </Link></li>
    <li className="li-header"> <Link to="/forms"><span className="header-span">Forms</span> </Link> </li>
    <li className="li-header"> <Link to="/apis"><span className="header-span">Apis</span> </Link> </li>
</ul>
            </header>
        );
    }
}

export default Header;