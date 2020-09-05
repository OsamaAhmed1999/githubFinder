import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nevbar = ({title, icon}) => {

    return (
        <nav className="navbar bg-dark">
            <h1> 
                <i className={icon} /> 
                {title} 
            </h1>

            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/about"> About </Link>
                </li>
            </ul>
        </nav>
    )
}

Nevbar.defaultProps = {
    title: " Github Finder",
    icon: "fab fa-github"
}

Nevbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Nevbar
