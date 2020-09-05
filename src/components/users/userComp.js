import React from 'react'
import { Link } from 'react-router-dom'

// Component with function

// 1 method handle props
// const UserComp = (props) => {
//     const {login, avatar_url, html_url} = props.user

// 2 method handle props
const UserComp = ({user: {login, avatar_url, html_url}}) => {

    return (
        <div className='card text-center'>
            <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{width: '60px'}}
            />

            <h3>{login}</h3>
            
            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm'> More </Link>
            </div>

        </div>
    )
}

export default UserComp

// Component with class

// class UserComp extends Component {

//     render() {
//         const {login, avatar_url, html_url} = this.props.user
//         return (
//             <div className='card text-center'>
//                 <img
//                 src={avatar_url}
//                 alt=''
//                 className='round-img'
//                 style={{width: '60px'}}
//                 />

//                 <h3>{login}</h3>
                
//                 <div>
//                     <a href={html_url} className='btn btn-dark btn-sm'> More </a>
//                 </div>

//             </div>
//         )
//     }
// }