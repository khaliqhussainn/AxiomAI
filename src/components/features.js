import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60), marginTop: 20}}>
      <Text style={{fontWeight: 'semibold', color: 'gray', fontSize: wp(6.5)}}>
        Features
      </Text>
      <View
        style={{
          backgroundColor: 'aqua',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          fontSize: wp(3),
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginBottom: 10,
          }}>
          <Image
            source={require('../../assets/chatgpt.png')}
            style={{width: wp(10), height: wp(10)}}></Image>
          <Text
            style={{
              fontWeight: 'semibold',
              fontSize: wp(4),
              color: 'gray',
              whiteSpace: 'normal',
            }}>
            ChatGPT
          </Text>
        </View>
        <Text
          style={{fontWeight: 'semibold', fontSize: wp(3.8), color: 'gray'}}>
          Smart-AI is an advanced conversational AI developed by OpenAI,
          designed to engage in natural language conversations and provide
          useful responses across a wide range of topics.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#DDD6FE',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          fontSize: wp(3),
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginBottom: 10,
          }}>
          <Image
            source={require('../../assets/dall.png')}
            style={{width: wp(10), height: wp(10)}}></Image>
          <Text
            style={{fontWeight: 'semibold', fontSize: wp(5), color: 'gray'}}>
            DALL-E
          </Text>
        </View>
        <Text
          style={{fontWeight: 'semibold', fontSize: wp(3.8), color: 'gray'}}>
          DALL-E is an advanced conversational AI developed by OpenAI.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#BFDBFE',
          padding: 10,
          fontSize: wp(3),
          borderRadius: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginBottom: 10,
          }}>
          <Image
            source={require('../../assets/smart.png')}
            style={{width: wp(10), height: wp(10)}}></Image>
          <Text
            style={{fontWeight: 'semibold', fontSize: wp(5), color: 'gray'}}>
            Smart-AI
          </Text>
        </View>
        <Text
          style={{fontWeight: 'semibold', fontSize: wp(3.8), color: 'gray'}}>
          ChatGPT is an advanced conversational AI developed by OpenAI,
        </Text>
      </View>
    </View>
  );
}
