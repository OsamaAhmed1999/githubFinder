import React from 'react'
import UserComp from './userComp'
import Spinner from '../layouts/spinner.js'
import PropTypes from 'prop-types'

//users and loading come as props
const Users = ({users, loading}) => {
    // state = {
    //     users: [
    //         {
    //             id: '1',
    //             login: "mojombo",
    //             avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //             html_url: "https://github.com/mojombo"
    //         },
    //         {
    //             id: '2',
    //             login: "defunkt",
    //             avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    //             html_url: "https://github.com/defunkt"
    //         },
    //         {
    //             id: '3',
    //             login: "pjhyett",
    //             avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    //             html_url: "https://github.com/pjhyett"
    //         }
    //     ]
    // }
    if(loading){
        return <Spinner/>
    }
    else{
    return (
        <div style={userStyle}>
            {users.map(user => (
                <UserComp key={user.id} user={user} />
            ))}
        </div>
    )}

}

Users.PropTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
