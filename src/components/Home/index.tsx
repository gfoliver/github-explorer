import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import Header from '../Header'
import HomeWrapper from './style'
import api from '../../services/api'
import arrowImg from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'

interface repository {
    full_name: string
    description: string
    owner: {
        avatar_url: string
        login: string
    }
    open_issues: number,
    forks: number
    stargazers_count: number
}

const Home: React.FC = () => {
    const [query, setQuery] = useState('')
    const [repositories, setRepositories] = useState<repository[]>([])

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.get('/repos/' + query);
            setRepositories([...repositories, response.data]);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const localStorageRepositories = localStorage.getItem('repositories')
        
        if (localStorageRepositories) {
            setRepositories(JSON.parse(localStorageRepositories))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories));
    }, [repositories])

    return (
        <HomeWrapper>
            <div className="container">
                <Header />
                <h1>
                    Explore repositórios <br />
                    no Github.
                </h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Digite aqui" 
                        required
                        value={query}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    />
                    <button type="submit">Pesquisar</button>
                </form>
                <ul className="repos">
                    {repositories.map(repo => (
                        <li key={repo.full_name}>
                            <Link to={{
                                pathname: `/${repo.owner.login}`,
                                state: repo.owner
                            }} className="image-link">
                                <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                            </Link>
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
            </div>
        </HomeWrapper>
    )
}

export default Home