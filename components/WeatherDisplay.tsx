import {
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Flex,
  VStack,
  HStack,
  Box,
} from '@chakra-ui/react';
import { FaThermometerHalf, FaWind, FaCloudRain } from 'react-icons/fa';
import React from 'react';
import { GiDew, GiSunRadiations } from 'react-icons/gi';
import {
  WiHumidity,
  WiBarometer,
  WiWindDeg,
  WiStrongWind,
} from 'react-icons/wi';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const WeatherDisplay = ({ weatherInfo }: { weatherInfo: any }) => {
  return (
    <div>
      <Tabs align="center" defaultIndex={0}>
        <TabList>
          <Tab>Outside</Tab>
          <Tab>Inside</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StatGroup>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="32"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Temperature</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={3}>
                      <FaThermometerHalf size={24} />
                    </Box>
                    {weatherInfo.tempf}°F
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="32"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Feels Like</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={3}>
                      <FaThermometerHalf size={24} />
                    </Box>
                    {weatherInfo.feelsLike}°F
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                width="32"
                p="3"
              >
                <StatLabel textAlign={'center'}>Humidity</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr="2">
                      <WiHumidity size={24} />
                    </Box>
                    {weatherInfo.humidity}%
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                width="48"
                p="3"
              >
                <StatLabel textAlign={'center'}>Wind Direction</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={3}>
                      <WiWindDeg size={24} />
                    </Box>
                    {weatherInfo.winddir}°
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                width="48"
                p="3"
              >
                <StatLabel textAlign={'center'}>Wind Speed</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={3}>
                      <WiStrongWind size={24} />
                    </Box>
                    {weatherInfo.windspeedmph} mph
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                width="48"
                p="3"
              >
                <StatLabel textAlign={'center'}>Wind Gust Speed</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={3}>
                      <FaWind size={24} />
                    </Box>
                    {weatherInfo.windgustmph} mph
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="48"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Dew Point</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={4}>
                      <GiDew size={24} />
                    </Box>
                    {weatherInfo.dewPoint}°F
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                width="48"
                p="3"
              >
                <StatLabel textAlign={'center'}>Solar Radiation</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr="2">
                      <GiSunRadiations size={24} />
                    </Box>
                    {weatherInfo.solarradiation} W/m^2
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="32"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Daily Rain</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr="2">
                      <FaCloudRain size={24} />
                    </Box>
                    {weatherInfo.dailyrainin} in
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width=""
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Rel. Bar. Press.</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr="2">
                      <WiBarometer size={24} />
                    </Box>
                    {weatherInfo.baromrelin} inHg
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="48"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Abs. Bar. Press.</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr="2">
                      <WiBarometer size={24} />
                    </Box>
                    {weatherInfo.baromabsin} inHg
                  </Flex>
                </StatNumber>
              </Stat>
            </StatGroup>
          </TabPanel>
          <TabPanel>
            <StatGroup display={'flex'} gap="10">
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="48"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Temperature</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr={3}>
                      <FaThermometerHalf size={24} />
                    </Box>
                    {weatherInfo.tempinf}°F
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
                width="32"
                flexDir="row"
                flexWrap={'nowrap'}
                flex="1 0 auto"
                p="3"
              >
                <StatLabel textAlign={'center'}>Humidity</StatLabel>
                <StatNumber>
                  <Flex align={'center'}>
                    <Box pr="2">
                      <WiHumidity size={24} />
                    </Box>
                    {weatherInfo.humidityin}%
                  </Flex>
                </StatNumber>
              </Stat>
            </StatGroup>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <HStack wrap="wrap" gap="10" justifyContent={'center'}></HStack>
    </div>
  );
};

export default WeatherDisplay;
