/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import storage from '../storage/storage';
import {Image, StyleSheet} from 'react-native';
import {
  Box,
  Center,
  Text,
  NativeBaseProvider,
  Button,
  Checkbox,
} from 'native-base';
import React, {useState} from 'react';

const Home = ({navigation}: {navigation: any}) => {
  const data = [
    {
      image: require('../assets/images/picture1.png'),
      title: 'Easy to Search',
      content:
        'Maecenas elementum est ut nulla blandit ultrices. Nunc quis ipsum urna. Aenean euismod sollicitudin nunc, ut rutrum magna ultricies eget',
    },
    {
      image: require('../assets/images/picture2.png'),
      title: 'Easy to Access',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat elementum laoreet. Nunc id quam et eros molestie finibus',
    },
    {
      image: require('../assets/images/picture3.png'),
      title: 'Easy to Manage',
      content:
        'Mauris vulputate interdum nibh vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas',
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(data);
  const nextStep = () => {
    setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1);
  };
  return (
    <NativeBaseProvider>
      <Box>
        
      </Box>
      <Center marginTop="20%">
        <Box height="60%">
          <Image source={steps[currentStep].image} alt="" style={style.img} />
        </Box>
        <Box flexDirection="row" height="1.2%" marginTop="4%">
          {steps.map((step, index) => (
            <Box
              key={index}
              borderRadius={5}
              width={currentStep === index ? '20%' : '10%'}
              backgroundColor={currentStep === index ? '#F27BBD' : '#63666a'}
              marginX="2%"
              flexDirection="row"></Box>
          ))}
        </Box>

        <Text fontSize={35} fontWeight={800}>
          {steps[currentStep].title}
        </Text>
        <Text textAlign="center" width={400}>
          {steps[currentStep].content}
        </Text>
        <Box
          flexDirection="row"
          marginTop="7%"
          justifyContent="space-between"
          width="100%"
          height="7%">
          {currentStep > 0 ? (
            <Button
              onPress={() => prevStep()}
              backgroundColor="#874CCC"
              borderRadius={'none'}
              width="20%"
              borderRightRadius={15}>
              back
            </Button>
          ) : (
            <Box></Box>
          )}
          {currentStep < 2 ? (
            <Button
              borderLeftRadius={15}
              backgroundColor="#874CCC"
              borderRadius={'none'}
              width="20%"
              onPress={() => nextStep()}>
              Next
            </Button>
          ) : (
            <Button
              onPress={() => navigation.navigate('Hello')}
              borderLeftRadius={15}
              background="#8644A2"
              width="20%">
              Finish
            </Button>
          )}
        </Box>
        <Button
          background="0"
          justifyContent="flex-end"
          onPress={() =>
            storage
              .save({key: 'skip', data: {status: 'true'}})
              .then(navigation.navigate('Hello'))
          }>
          <Text>Skip this forever</Text>
        </Button>
      </Center>
    </NativeBaseProvider>
    
  );
};
const style = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    width: 400,
    height: 400,
  },
});

export default Home;
