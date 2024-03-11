import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  bg,
  color,
  border,
  width,
  height,
  mt,
  onPress,
  size,
  weight,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width ? width : '90%',
        height: height ? height : 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: mt ? mt : 10,
        borderRadius: border ? border : 0,
        backgroundColor: bg ? bg : 'black',
      }} onPress={()=>{
        onPress()
      }}>
      <Text
        style={{
          color: color ? color : 'white',
          fontSize: size ? size : 14,
          fontWeight: weight ? weight : '400',
        }}>
        {title ? title : 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
