import styled from 'styled-components'

export default styled.div`
    h1 {
        font-size: 48px;
        margin-bottom: 40px;

        @media only screen and (max-width: 600px) {
            font-size: 32px;
        }
    }

    form {
        display: flex;
        width: 100%;
        max-width: 714px;
        margin-bottom: 120px;

        input { 
            width: 100%;
            padding: 24px 30px;
            font-size: 20px;
            background: #fff;
            border: none;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

            &::placeholder {
                color: #A8A8B3;
            }
        }

        button {
            background: #04D361;
            border-radius: 0px 5px 5px 0px;
            color: #fff;
            font-weight: bold;
            border: none;
            padding: 24px 65px;
            text-align: center;
            font-size: 18px;
            transition: all .3s ease;

            &:hover {
                background: #0cb156;
            }
        }

        @media only screen and (max-width: 600px) {
            display: block;

            input {
                border-radius: 5px;
                margin-bottom: 10px;
                font-size: 14px;
            }

            button {
                border-radius: 5px;
                font-size: 16px;
                width: 100%;
            }
        }
    }

    .repos {
        width: 100%;
        max-width: 714px;
        padding: 0;
        list-style: none;

        li {
            width: 100%;
            margin-bottom: 16px;
            border-radius: 5px;
            background: #fff;
            padding: 14px;
            display: flex;
            align-items: center;

            .image-link {
                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 100%;
                    object-fit: cover;
                    margin-right: 20px;
                }
            }

            .text {
                margin-right: 20px;
            }

            h2 {
                font-size: 24px;
                margin-bottom: 4px;
            }

            span {
                font-size: 18px;
                color: #A8A8B3;
            }

            .see-more {
                margin-left: auto;
            }
        }

        @media only screen and (max-width: 600px) {
            li {
                .image-link img {
                    width: 60px;
                    height: 60px;
                }

                h2 {
                    font-size: 18px;
                }

                span {
                    font-size: 14px;
                }
            }
        }
    }
`