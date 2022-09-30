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
  Text,
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
            <StatGroup gap="4">
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                bgColor={'white'}
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
                height={'20'}
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <FaThermometerHalf size={16} />
                    Temperature
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.tempf}
                    <Text fontSize={'sm'}>°F</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                bgColor={'white'}
                width="36"
                height={'20'}
                p="1"
              >
                <StatLabel>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <FaThermometerHalf size={16} />
                    Feels Like
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.feelsLike}
                    <Text fontSize={'sm'}>°F</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                bgColor={'white'}
                borderRadius="6"
                height={'20'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <WiHumidity size={20} />
                    Humidity
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.humidity}
                    <Text fontSize={'sm'}>%</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                justifyContent={'center'}
                bgColor={'white'}
                flexDir="row"
                height={'20'}
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <WiWindDeg size={20} />
                    Wind Direction
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.winddir}°
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                bgColor={'white'}
                justifyContent={'center'}
                flexDir="row"
                height={'20'}
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <WiStrongWind size={24} />
                    Wind Speed
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.windspeedmph} <Text fontSize={'sm'}> mph</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                height={'20'}
                justifyContent={'center'}
                flexDir="row"
                bgColor={'white'}
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <FaWind size={16} />
                    Gust Speed
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.windgustmph} <Text fontSize={'sm'}> mph</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                bgColor={'white'}
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                height={'20'}
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <GiDew size={16} />
                    Dew Point
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <StatNumber>
                    <Box pr={3}></Box>
                    <Flex justifyContent="center" gap="2" align={'end'}>
                      {weatherInfo.dewPoint}
                      <Text fontSize={'sm'}>°F</Text>
                    </Flex>
                  </StatNumber>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                height={'20'}
                justifyContent={'center'}
                flexDir="row"
                bgColor={'white'}
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <GiSunRadiations size={16} />
                    Solar Radiation
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.solarradiation}
                    <Text fontSize={'sm'}>W/m^2</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                height={'20'}
                flexWrap={'nowrap'}
                bgColor={'white'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <FaCloudRain size={16} />
                    Daily Rain
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.dailyrainin} <Text fontSize={'sm'}> in</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                height={'20'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                bgColor={'white'}
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <WiBarometer size={16} />
                    Rel Bar Press
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.baromrelin} <Text fontSize={'sm'}> inHg</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                height={'20'}
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                bgColor={'white'}
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <WiBarometer size={16} />
                    Abs Bar Press
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.baromabsin} <Text fontSize={'sm'}> inHg</Text>
                  </Flex>
                </StatNumber>
              </Stat>
            </StatGroup>
          </TabPanel>
          <TabPanel>
            <StatGroup gap="4">
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                bgColor={'white'}
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
                height={'20'}
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <FaThermometerHalf size={16} />
                    Temperature
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.tempinf}
                    <Text fontSize={'sm'}>°F</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                borderRadius="6"
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                bgColor={'white'}
                width="36"
                height={'20'}
                p="1"
              >
                <StatLabel>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <FaThermometerHalf size={16} />
                    Feels Like
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.feelsLikein}
                    <Text fontSize={'sm'}>°F</Text>
                  </Flex>
                </StatNumber>
              </Stat>
              <Stat
                display={'flex'}
                shadow={'md'}
                bgColor={'white'}
                borderRadius="6"
                height={'20'}
                alignItems="center"
                justifyContent={'center'}
                flexDir="row"
                flexWrap={'nowrap'}
                flex="0 0 auto"
                width="36"
                p="1"
              >
                <StatLabel textAlign={'center'}>
                  <Flex
                    gap="1"
                    justifyContent={'center'}
                    alignItems="center"
                    pr={3}
                  >
                    <WiHumidity size={20} />
                    Humidity
                  </Flex>
                </StatLabel>
                <StatNumber>
                  <Box pr={3}></Box>
                  <Flex justifyContent="center" gap="2" align={'end'}>
                    {weatherInfo.humidityin}
                    <Text fontSize={'sm'}>%</Text>
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
