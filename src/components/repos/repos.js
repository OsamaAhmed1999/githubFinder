import React, { useContext } from 'react'
import Repoitem from './repoitem'
import GithubContext from '../../context/github/githubContext';


const Repos = () => {

    const githubContext = useContext(GithubContext)
    return (
        <div>
            {githubContext.repos.map(repo => (
                <Repoitem key={repo.id} repo={repo} />
            ))}
        </div>
    )
};


export default Repos;