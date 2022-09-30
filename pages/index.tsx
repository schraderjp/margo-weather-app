import { NextPage } from 'next';
import { Container, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import WeatherDisplay from '../components/WeatherDisplay';
import { format } from 'date-fns';

const Home: NextPage = () => {
  const fetcher = async () => {
    const data = await axios.get('/api/station');
    return await data.data;
  };

  const { data, error, status } = useQuery(['devices'], fetcher);

  return (
    <Container>
      <Heading textAlign={'center'} as="h1" size="xl" py={'2'}>
        Weather in Margo, VA
      </Heading>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && (
        <>
          <Text py="2" textAlign={'center'}>
            <strong>Updated:</strong>{' '}
            {format(data[0].dateutc, "M/dd/yyyy 'at' h:mm a")}
          </Text>
          <WeatherDisplay weatherInfo={data[0]} />
        </>
      )}
    </Container>
  );
};

export default Home;
