import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Navbar from './components/layouts/nevbar'
import Users from './components/users/users'
import  Search from './components/users/search'
import Alert from './components/layouts/alert'
import About from './components/pages/about'
import User from './components/users/user'


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  // Set Users when app starts
  // method 1
  async componentDidMount(){
    
    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // console.log(res.data)

    this.setState({loading: false, users: res.data})
  }
  // method 2
  // componentDidMount(){
  //   axios.get("https://api.github.com/users")
  //   .then(res => console.log(res.data))
  // }

  // search in users
  searchUsers = async (text) => {
    this.setState({loading: true})
  
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    this.setState({loading: false, users: res.data.items})
    // console.log(res.data)
  }

  // get single Github user
  getUser = async (username) => {
    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    this.setState({loading: false, user: res.data})
  }

  //clear users
  clearUsers = () => this.setState({users:[], loading: false})

  // Set alert
  setAlert = (msg, type) => {
    this.setState({alert:{msg, type}})
    setTimeout(() => this.setState({alert: null}), 5000)
  }

  render(){
    const {users, loading,  alert, user} = this.state
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
                searchUsers={this.searchUsers}
                clearUsers={this.clearUsers}
                showClear={users.length > 0 ? true:false}
                setAlert={this.setAlert}/>
                <Users loading={loading} users={users}/>
              </Fragment>
            )} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" render={props => (
              <User {...props} getUser={this.getUser} user={user} loading={loading}/>
            )}/>
          </Switch>
          
        </div>
      </div>
      </Router>
    );
  }
  
}

export default App;
