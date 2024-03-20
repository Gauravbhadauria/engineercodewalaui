import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

const CustomWelcome = ({
  screens,
  activeDotColor,
  nonActiveDotColor,
  bgColor,
  btnBgColor,
  btnTextColor,
  titleStyle,
  descStyle,
  imageStyle,
  onContinue
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: bgColor ? bgColor : 'white'}}>
      <View>
        <FlatList
          horizontal
          ref={ref}
          data={screens}
          onScroll={e => {
            setSelectedIndex(
              (
                e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              ).toFixed(0),
            );
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: Dimensions.get('window').width,
                  height: '80%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={
                    imageStyle
                      ? imageStyle
                      : {
                          width: '90%',
                          height: '80%',
                          resizeMode: 'contain',
                          marginTop: 20,
                        }
                  }
                />
                <Text
                  style={
                    titleStyle
                      ? titleStyle
                      : {fontSize: 30, color: 'black', marginTop: 50}
                  }>
                  {item.title}
                </Text>
                <Text
                  style={
                    descStyle
                      ? descStyle
                      : {fontSize: 16, color: 'black', marginTop: 10}
                  }>
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{alignSelf: 'center', flexDirection: 'row'}}>
        {screens.map((item, index) => {
          return (
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor:
                  selectedIndex == index
                    ? activeDotColor
                      ? activeDotColor
                      : 'black'
                    : nonActiveDotColor
                    ? nonActiveDotColor
                    : '#9e9e9e',
                marginLeft: 10,
              }}></View>
          );
        })}
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 40,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {selectedIndex > 0 && (
            <TouchableOpacity
              style={{
                width: '40%',
                backgroundColor: btnBgColor ? btnBgColor : 'black',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                borderRadius: 8,
              }}
              onPress={() => {
                ref.current.scrollToIndex({
                  animation: true,
                  index: parseInt(selectedIndex) - 1,
                });
                setSelectedIndex(selectedIndex - 1);
              }}>
              <Text style={{color: btnTextColor ? btnTextColor : 'white'}}>
                {'Previous'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {selectedIndex < screens.length - 1 && (
            <TouchableOpacity
              style={{
                width: '40%',
                backgroundColor: btnBgColor ? btnBgColor : 'black',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                borderRadius: 8,
              }}
              onPress={() => {
                ref.current.scrollToIndex({
                  animation: true,
                  index: parseInt(selectedIndex) + 1,
                });
                setSelectedIndex(selectedIndex + 1);
              }}>
              <Text style={{color: btnTextColor ? btnTextColor : 'white'}}>
                {'Next'}
              </Text>
            </TouchableOpacity>
          )}
          {selectedIndex == screens.length - 1 && (
            <TouchableOpacity
              style={{
                width: '40%',
                backgroundColor: btnBgColor ? btnBgColor : 'black',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                borderRadius: 8,
              }}  onPress={() => {
                onContinue()
              }}>
              <Text style={{color: btnTextColor ? btnTextColor : 'white'}}>
                {'Continue'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomWelcome;
