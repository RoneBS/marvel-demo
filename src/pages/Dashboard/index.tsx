import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import sectionImg from '../../assets/wolverine.jpeg';

import { Section, Title, Card } from './styles';

type CharactersProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

const Dashboard: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function loadCharacters(): Promise<void> {
      const { data } = await api.get(
        `series/403/characters?&limit=${process.env.REACT_APP_LIMIT}&apikey=${process.env.REACT_APP_KEY}`,
      );
      const response = data.data.results;

      setCharacters(response);
    }

    loadCharacters();
  }, []);

  return (
    <>
      <Header />
      <Section>
        <p>
          Wolverine the imortal hero:
          <br />
          new commics from this summer
        </p>
        <img src={sectionImg} alt="wolverine" />
      </Section>
      <Title>
        <h1>Choose your Hero</h1>
      </Title>
      <Card>
        {characters.map((character: CharactersProps) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <div>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={`${character.name}`}
              />
              <h1>{`${character.name}`}</h1>
              <section />
            </div>
          </Link>
        ))}
      </Card>
      <Footer />
    </>
  );
};

export default Dashboard;
