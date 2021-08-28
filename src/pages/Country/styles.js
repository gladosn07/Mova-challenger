import styled from 'styled-components';

export const Container = styled.div`
    margin: 96px 80px 0 166px;
    widht: 100vw;

    @media (max-width: 750px) {
        margin: 0 50px;
    }
`;

export const CountryContainer = styled.section`
    display: flex;
    widht: 100vw;
    flex-direction: row;
    align-items: center;
    column-gap: 70px;
    color: ${(props) => props.theme.colors.text};

    .flag {
        width: 443px;
        height: 258px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        @media (max-width: 800px) {
            width: 100%;
            height: 180px;
            margin-bottom: 20px;
        }

        @media (min-width: 650px) {
            height: 300px;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const CountryInfo = styled.div`
    display: block;
    margin-left: -46px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #454545;

    @media (max-width: 800px) {
        width: 100%;
    }

    h1 {
        margin-bottom: 20px;
    }

    span {
        font-weight: bold;
    }

    ul {
        columns: 1;

        li + li {
            margin-top: 20px;
        }
    }
`;

export const BorderCountries = styled.div`
    display: flex;
    margin-top: 48px;
    div {
        display: flex;
        height: 15vh;
        }

        @media (max-width: 750px) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            margin-top: 10px;
            margin-left: 0;
        }
    }

    @media (max-width: 750px) {
        margin-bottom: 20px;
        flex-direction: column;
    }
`;
export const H2 = styled.h2`
    margin-top: 114px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
`;

export const BorderFlag = styled.div`
    width: 100%;
    height: 147px;
    border-radius: 5px 5px 0 0;
    background-image: url(${(props) => props.flag});
    background-size: cover;
    background-position: center;
`;
