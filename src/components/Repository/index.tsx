import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useLocation, useParams, Link } from 'react-router-dom'
import api from '../../services/api'
import RepositoryWrapper from './style'

interface RouteParams {
    user: string
    repo: string
}

interface issue {
    html_url: string
    title: string
    user: {
        login: string
    }
}

interface repository {
    full_name: string
    description: string
    owner: {
        avatar_url: string
        login: string
    }
    open_issues: number
    forks: number
    stargazers_count: number
    issues: issue[]
}

const Repository: React.FC = () => {
    const location = useLocation<repository>()
    const { user, repo } = useParams<RouteParams>()
    const [repository, setRepository] = useState<repository | null>(null)
    const [foundIssues, setFoundIssues] = useState(false)

    useEffect(() => {
        if (location.state) {
            setRepository(location.state)
        }
        else {
            api.get(`/repos/${user}/${repo}`)
                .then(response => {
                    setRepository(response.data)
                })
                .catch()
        }
    }, [location.state, user, repo])

    useEffect(() => {
        if (!repository?.full_name || foundIssues)
            return

        try {
            api.get<issue[]>(`/repos/${repository.full_name}/issues`).then(response => {
                setRepository({...repository, issues: response.data})
                setFoundIssues(true)
            })
        }
        catch(error) {
            console.log(error)
        }
    },[repository])

    return (
        <RepositoryWrapper>
            <div className="container">
                <Header showBackButton={true} />
                {repository && (
                    <div className="repository">
                        <div className="top">
                            <Link to={`/${repository.owner.login}`}>
                                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            </Link>
                            <div className="text">
                                <h1>{repository.full_name}</h1>
                                <span>{repository.description}</span>
                            </div>
                        </div>
                        <ul className="data">
                            <li>
                                <div className="value">{repository.stargazers_count}</div>
                                <span>Stars</span>
                            </li>
                            <li>
                                <div className="value">{repository.forks}</div>
                                <span>Forks</span>
                            </li>
                            <li>
                                <div className="value">{repository.open_issues}</div>
                                <span>Issues abertas</span>
                            </li>
                        </ul>
                        {repository.issues && (
                            <ul className="issues">
                                {repository.issues.map(issue => (
                                    <li key={issue.html_url}>
                                        <a href={issue.html_url} target="_blank">
                                            <h2>{issue.title}</h2>
                                        </a>
                                        <Link className="user" to={`/${issue.user.login}`}>{issue.user.login}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </RepositoryWrapper>
    )
}

export default Repository