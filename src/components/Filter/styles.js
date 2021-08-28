import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 40px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const FilterList = styled.div`
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        padding: 20px 30px;
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};

        @media (max-width: 750px) {
            width: 100%;
            margin-top: 20px;
        }
    }

    ul {
        list-style: none;
        margin-top: 5px;
        padding: 20px 30px;
        width: 200px;
        border: 0;
        border-radius: 4px;
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};

        display: ${(props) => (props.toggleDropdown ? 'block' : 'none')};
        position: absolute;

        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

        @media (max-width: 750px) {
            width: 100%;
            position: relative;
        }

        li + li {
            margin-top: 20px;
        }

        li {
            button {
                background: none;
                padding: 0;
                width: 100%;
            }
        }
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    position: block;
    width: 156px;
    height: 36px;
    left: calc(50% - 156px / 2 + 316px);
    top: calc(50% - 36px / 2 - 259px);

    background: #6d2080;
    border-radius: 10px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffff;
    transition: 0.3s;
    &:hover {
        background: #be91c9;
        cursor: pointer;
    }
`;

export const Span = styled.span`
    color: #8d8d8d;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    &:hover {
        color: #02ae99;
    }
`;