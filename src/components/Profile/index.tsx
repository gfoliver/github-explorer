import React, { useEffect, useState } from 'react'
import Header from '../Header'
import api from '../../services/api'
import { useParams, Link } from 'react-router-dom'
import ProfileWrapper from './style'
import arrowImg from '../../assets/arrow.svg'

interface repository {
    full_name: string
    description: string
}

interface IUser {
    avatar_url: string
    login: string
    name: string
    repositories: repository[]
    repos_url: string
    public_gists: number
    public_repos: number
}

interface RouteParams {
    user: string
}

const Profile: React.FC = () => {
    const [user, setUser] = useState<IUser>()
    const [foundRepositories, setFoundRepositories] = useState(false)
    const params = useParams<RouteParams>()

    useEffect(() => {
        api.get('/users/' + params.user)
            .then(response => {
                setUser(response.data)
            })
            .catch()
    }, [])

    useEffect(() => {
        if (!user || foundRepositories)
            return

        api.get<repository[]>(user.repos_url)
            .then(response => {
                setUser({...user, repositories: response.data})
                setFoundRepositories(true)
            })
            .catch()
    }, [user])

    return (
        <ProfileWrapper>
            <div className="container">
                <Header showBackButton={true} />
                {user && (
                    <div className="user">
                        <div className="top">
                            <img src={user.avatar_url} alt={user.name} />
                            <div className="text">
                                <h1>{user.name}</h1>
                                <span>@{user.login}</span>
                            </div>
                        </div>
                        <ul className="data">
                            <li>
                                <div className="value">{user.public_gists}</div>
                                <span>Gists</span>
                            </li>
                            <li>
                                <div className="value">{user.public_repos}</div>
                                <span>Repos</span>
                            </li>
                        </ul>
                        {user.repositories && (
                            <ul className="repositories">
                                {user.repositories.map(repo => (
                                    <li key={repo.full_name}>
                                        <div className="text">
                                            <h2>{repo.full_name}</h2>
                                            <span>{repo.description}</span>
                                        </div>
                                        <Link to={{
                                            pathname: `/${repo.full_name}`,
                                            state: repo
                                        }} className="see-more">
                                            <img src={arrowImg} alt="Arrow" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </ProfileWrapper>
    )
}

export default Profile