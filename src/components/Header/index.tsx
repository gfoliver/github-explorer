import React from 'react'
import logoImg from '../../assets/logo.svg'
import HeaderComponent from './style'
import { useHistory, Link } from 'react-router-dom'
import arrowImg from '../../assets/arrow-left.svg'

interface headerProps {
    showBackButton?: boolean
}

const Header: React.FC<headerProps> = ({ showBackButton }) => {
    const history = useHistory()
    
    function goBack() {
        history.goBack()
    }

    return (
        <HeaderComponent className="Header">
            <Link to="/">
                <img src={logoImg} alt="Github Explorer" />
            </Link>
            {showBackButton && (
                <button onClick={goBack}>
                    <img src={arrowImg} alt="Arrow" />
                    Voltar
                </button>
            )}
        </HeaderComponent>
    )
}

export default Header