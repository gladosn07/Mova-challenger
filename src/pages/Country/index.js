import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
    Container,
    CountryContainer,
    CountryInfo,
    BorderCountries,
    H2,
    BorderFlag,
} from './styles';

import api from '../../services/api';
import PaginationRounded from '../../components/Pagination/pagination';

export default function Country() {
    const [country, setCountry] = useState([]);

    const { name } = useParams();

    async function loadCountry() {
        if (name.length < 4) {
            const response = await api.get(`/alpha/${name}`);

            setCountry(response.data);
        } else {
            const response = await api.get(`/name/${name}`);

            setCountry(response.data[0]);
        }
    }

    useEffect(() => {
        loadCountry();
    }, []);

    useEffect(() => {
        loadCountry();
    }, [name]);

    return (
        <Container>
            <CountryContainer>
                <div
                    className="flag"
                    style={{ backgroundImage: `url(${country.flag})` }}
                />
                <CountryInfo>
                    <ul>
                        <li>
                            <span>Nome:</span> {country.name}
                        </li>
                        <li>
                            <span>Capital: </span> {country.capital}
                        </li>
                        <li>
                            <span>Região:</span>{' '}
                            <Link
                                to={`/country/${country.region}`}
                                key={country.name}
                            >
                                {country.region}
                            </Link>
                        </li>
                        <li>
                            <span>Sub-região:</span> {country.subregion}
                        </li>
                        <li>
                            <span>População:</span>{' '}
                            {country.population &&
                                country.population.toLocaleString()}
                        </li>
                        <li>
                            <span>Linguas:</span>{' '}
                            {country.languages
                                ? country.languages
                                      .map((language) => language.name)
                                      .join(', ')
                                : ''}
                        </li>
                    </ul>
                </CountryInfo>
            </CountryContainer>
            <H2>Países Vizinhos</H2>
            {country.borders && country.borders.length > 0 && (
                <BorderCountries>
                    <div>
                        {country.borders
                            ? country.borders.map((border) => {
                                  return (
                                      <>
                                          <div>
                                              <BorderFlag
                                                  flag={border.flag}
                                                  style={{
                                                      backgroundImage: `url(${border.name})`,
                                                  }}
                                              />
                                          </div>
                                      </>
                                  );
                              })
                            : ''}
                    </div>
                </BorderCountries>
            )}
            <PaginationRounded />
        </Container>
    );
}
