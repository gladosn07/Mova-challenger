/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

import { BsArrowReturnLeft } from 'react-icons/bs';
import logo from '../../assets/logo_principal.svg';

import { Container, GoBack } from './styles';

export default function Header() {
    return (
        <>
            <Container>
                <img src={logo} />
                <GoBack>
                    <Link to="/">
                        <BsArrowReturnLeft />
                        Voltar
                    </Link>
                </GoBack>
            </Container>
        </>
    );
}
