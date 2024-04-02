import {View, Text, Alert, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Header,Button} from '@engineercodewala/components'


const App = () => {
  const [name, setName] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title='Btn by ec'/>
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
