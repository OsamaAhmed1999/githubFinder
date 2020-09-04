import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ""
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})

    }

    onSubmit= (event) => {
        event.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({text: ""})
    }

    render() {
        const {text} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search User"
                    value={text}
                    onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>

                </form>
            </div>
        )
    }
}

export default Search