import {View, Text, Image, Touchable,StyleSheet ,TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#000',
      }}>
       <Image
          source={require('../../assets/main.jpg')}
          style={{width: wp(100), height: "100%" , backgroundColor: '#000'}}
        />
        <View style={styles.blackOverlay} />
      <View>
        <Text
          style={{textAlign: 'center',color: 'white', fontSize: wp(7), fontWeight: 'bold' , position: 'absolute' , bottom: hp(20) , left: 0 , right: 0 }}>
          Where Should We Start?
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'semibold',
            color: '#709494',
            fontSize: wp(4),
            position: 'absolute',
            bottom: hp(16),
            left: 0,
            right: 0,
          }}>
          {' '}
          The Future is here, Powered by AI.
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
       
      </View>
      <AntDesign onPress={() => navigation.navigate('OpenAI')} name="rightcircle" size={60} color="#709494" style={{position: 'absolute' , bottom: hp(5) , right: wp(5)}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blackOverlay: {
    ...StyleSheet.absoluteFillObject, // Makes the overlay cover the entire image
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust opacity (0.7) as per your need
  },
});