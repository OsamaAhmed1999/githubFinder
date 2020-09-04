import React from 'react'
import PropTypes from 'prop-types'

const Nevbar = ({title}) => {

    return (
        <nav className="navbar bg-primary">
            <h1>  {title} </h1>
        </nav>
    )
}

Nevbar.defaultProps = {
    title: "Github Finder",
}

Nevbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Nevbar
