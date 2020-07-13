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

        @media only screen and (max-width: 600px) {
            display: block;

            img {
                margin: 0 auto 20px;
                display: block;
            }

            h1 {
                text-align: center;
                font-size: 26px;
                margin-bottom: 5px;
            }

            span {
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
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;
            margin-bottom: 50px;

            li {
                text-align: center;
                margin: 0;
            }
        }
    }

    .repositories {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin-bottom: 16px;
            background: #fff;
            border-radius: 5px;
            padding: 28px 24px;
            display: flex;
            justify-content: space-between;

            .text {
                width: 100%;
            }

            h2 {
                font-size: 24px;
                margin-bottom: 4px;
                word-break: break-all;
                width: 100%;
            }

            span {
                font-size: 18px;
                color: #A8A8B3;
                width: 100%;
                word-break: break-word;
            }
        }

        @media only screen and (max-width: 700px) {
            li {
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