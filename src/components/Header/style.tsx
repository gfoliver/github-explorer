import styled from 'styled-components'

export default styled.header`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    margin-bottom: 30px;

    img {
        width: 100%;
        max-width: 215px;
        height: auto;
        display: block;
    }

    button {
        background: none;
        border: none;
        display: flex;
        font-size: 16px;
        margin: 0;
        padding: 0;
        font-weight: bold;
        align-items: center;
        color: #A8A8B3;

        img {
            width: 8px;
            height: 12px;
            object-fit: contain;
            margin-right: 12px;
        }
    }
`