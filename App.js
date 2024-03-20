import {View, Text, Alert, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomTextinput from './src/components/CustomTextinput';
import CustomButton from './src/components/CustomButton';
import CustomBottamNav from './src/components/CustomBottamNav';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import CustomWelcome from './src/components/CustomWelcome';
import { Header } from './src/Index';



const App = () => {
  const [name, setName] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CustomWelcome

        screens={[
          {
            image: require('./slide1.jpg'),
            title: 'Slide 1',
            desc: 'slide 1 description',
          },
          {
            image: require('./slide2.png'),
            title: 'Slide 1',
            desc: 'slide 1 description',
          },
          {
            image: require('./slide1.jpg'),
            title: 'Slide 3',
            desc: 'slide 3 description',
          },
          {
            image: require('./slide2.png'),
            title: 'Slide 4',
            desc: 'slide 4 description',
          },
        ]}
        onContinue={() => {
          //navigation
        }}
        activeDotColor={'red'}
        // nonActiveDotColor={'#f2f2f2'}
      /> */}
      <Header
        title={'Home'}
        rightIconStyle={{width:30,height:30}}
        leftIconStyle={{width:30,height:30}}
        onClickRight={(x)=>{
          console.log(x)
        }}
        onClickLeft={()=>{
          
        }}
        leftIcon={require('./menu.png')}
        rightIcons={[require('./loupe.png'), require('./bell.png')]}
      />
    </SafeAreaView>
  );
};

export default App;
