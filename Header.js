import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <ul className="list">
                <li className="list__item">
                    <Link to="/">All</Link>
                </li>
                <li className="list__item">
                    <Link to="/active">Active</Link>
                </li>
                <li className="list__item">
                    <Link to="/completed">Completed</Link>
                </li>
            </ul>
            <hr/>
        </header>
    )
}

export default Header