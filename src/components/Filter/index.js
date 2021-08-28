import React, { useState, useEffect } from 'react';

import { FaChevronDown } from 'react-icons/fa';

import { Container, FilterList, Button, Span } from './styles';

export default function Filter({ searchTerm, filterByRegion }) {
    const [showDropdown, setShowdropdown] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const regions = [
        'Região',
        'Capital',
        'Lingua',
        'País',
        'Código de ligação',
    ];

    function toggleDropdown() {
        setShowdropdown(!showDropdown);
    }

    useEffect(() => {
        searchTerm(search);
    }, [search]);

    function selectRegion(region, country) {
        setSelectedRegion(region, country);
        filterByRegion(region, country);
        setShowdropdown(false);
        setSearch('');
    }

    /* Funcao chamando dropdown com array */

    return (
        <Container>
            <FilterList toggleDropdown={showDropdown}>
                <button type="button" onClick={toggleDropdown}>
                    {selectedRegion !== '' ? (
                        <span>{selectedRegion}</span>
                    ) : (
                        <span>Escolha uma opção</span>
                    )}
                    <FaChevronDown />
                </button>
                <ul>
                    {regions.map((region, country) => (
                        <li key={region}>
                            <button
                                type="button"
                                onClick={() => selectRegion(region, country)}
                            >
                                <Span>{region}</Span>
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterList>
            {/* segundo input */}

            <FilterList>
                <button type="button">
                    {selectedRegion !== '' ? (
                        <span>{selectedRegion}</span>
                    ) : (
                        <span>Escolha uma opção</span>
                    )}
                    <FaChevronDown />
                </button>
                <ul>
                    {regions.map((region) => (
                        <li key={region}>
                            <button
                                type="button"
                                onClick={() => selectRegion(region)}
                            >
                                <Span>{region}</Span>
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterList>
            <Button>PESQUISAR</Button>
        </Container>
    );
}
