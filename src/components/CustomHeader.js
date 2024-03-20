import {
  View,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const CustomHeader = ({
  bg,
  leftIcon,
  rightIcons,
  onClickRight,
  onClickLeft,
  title,
  leftIconStyle,
  rightIconStyle,
  titleStyle,
}) => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: 70,
        backgroundColor: bg ? bg : '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={()=>{
                   onClickLeft()
                }}>
        <Image
          source={leftIcon}
          style={leftIconStyle ? leftIconStyle : {width: 24, height: 24}}
        />
      </TouchableOpacity>
      <Text style={titleStyle ? titleStyle : {fontSize: 18, fontWeight: '500'}}>
        {title ? title : 'Header'}
      </Text>
      <View>
        <FlatList
          data={rightIcons}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: 30,
                  marginLeft: 20,
                  justifyContent: 'center',
                }} onPress={()=>{
                    onClickRight(index)
                }}>
                <Image
                  source={item}
                  style={
                    rightIconStyle ? rightIconStyle : {width: 24, height: 24}
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomHeader;
