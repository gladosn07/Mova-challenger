import styled from 'styled-components';

export const Container = styled.header`
    background: ${(props) => props.theme.colors.elements};
    color: ${(props) => props.theme.colors.text};

    display: flex;
    width: 100vw;
    justify-content: space-between;

    box-shadow: 0px 10px 13px rgba(0, 0, 0, 14%);

    }

    img {
        margin: 19px 0 19.34px 46px;
    }

    @media (max-width: 750px) {
        padding: 20px 20px;
    }
`;

export const GoBack = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    margin: 50px 0;

    margin: 32px 67px 32px 1299px;

    a {
        display: flex;
        align-items: center;
        padding: 8px 20px;
        width: 134px;
        height: 36px;

        border: 1px solid #6d2080;
        box-sizing: border-box;
        color: #6d2080;
        transition: 0.3s;
        font-family: Montserrat;
        font-size: 18px;
        &:hover {
            opacity: 0.7;
            background: #be91c9;
            color: #fff;
        }

        svg {
            margin-right: 10px;
        }

        @media (max-width: 750px) {
            width: 120px;
        }

        @media (min-width: 650px) {
            width: 110px;
        }
    }
`;
