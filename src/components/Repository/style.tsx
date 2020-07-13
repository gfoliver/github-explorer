import styled from 'styled-components'

export default styled.div`
    .top {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        img {
            width: 125px;
            height: 125px;
            border-radius: 100%;
            margin-right: 30px;
        }

        h1 {
            font-size: 36px;
        }

        @media only screen and (max-width: 600px) {
            display: block;

            a {
                margin: 0 auto;
            }

            img {
                margin: 0 auto 20px;
                display: block;
            }

            h1 {
                font-size: 24px;
                text-align: center;
                margin-bottom: 10px;
            }

            span {
                max-width: 80%;
                display: block;
                margin: 0 auto 30px;
                text-align: center;
            }
        }
    }

    .data {
        margin-top: 30px;
        display: flex;
        margin-bottom: 90px;
        padding: 0;
        list-style: none;

        li {
            margin-right: 80px;

            .value {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 4px;
            }

            span {
                font-size: 20px;
                color: #6C6C80;
            }
        }

        @media only screen and (max-width: 600px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 10px;

            li {
                margin-right: 0;
                text-align: center;

                .value {
                    font-size: 24px;
                }

                span {
                    font-size: 14px;
                }
            }
        }
    }

    .issues {
        padding: 0;
        list-style: none;
        margin: 0;

        li {
            width: 100%;
            border-radius: 5px;
            background: #fff;
            margin-bottom: 16px;
            padding: 24px 27px;

            h2 {
                font-size: 24px;
                margin-bottom: 4px;
            }

            a {
                text-decoration: none;
                color: #3D3D4D;
            }

            .user {
                color: #A8A8B3;
                font-size: 18px;
                transition: all .3s ease;

                &:hover {
                    color: #04D361;
                }
            }
        }

        @media only screen and (max-width: 600px) {
            li {
                h2 {
                    font-size: 18px;
                }

                .user {
                    font-size: 14px;
                }
            }
        }
    }
`