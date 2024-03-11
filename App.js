import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextinput from './src/components/CustomTextinput';
import CustomButton from './src/components/CustomButton';
import CustomBottamNav from './src/components/CustomBottamNav';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

const App = () => {
  const [name, setName] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
       {/* {selectedTab==0?<Screen1/>:selectedTab==1?<Screen2/>:selectedTab==2?<Screen3/>:<Screen4/>}
      <CustomBottamNav
       
        tabs={[
          {
            icon: require('./icon1.png'),
            activeIcon: require('./icon1_active.png'),
            title: 'Home',
            size: 30,
            fontSize: 14,
          },
          {
            icon: require('./icon2.png'),
            activeIcon: require('./icon2active.png'),
            title: 'Explore',
            size: 30,
            fontSize: 14,
          },
          {
            icon: require('./icon3.png'),
            activeIcon: require('./icon3active.png'),
            title: 'Saved',
            size: 30,
            fontSize: 14,
          },
          {
            icon: require('./icon4.png'),
            activeIcon: require('./icon4active.png'),
            title: 'Profiile',
            size: 30,
            fontSize: 14,
          },
        ]}
        onSelected={index => {
          setSelectedTab(index);
        }}
        bg={'#f2f2f2'}
        height={80}
      /> */}
      <CustomButton/>
      <CustomTextinput isBad={'Please Enter Something....'} placeholder={'Enter Comment Here...'} border={1}/>
    </View>
  );
};

export default App;
