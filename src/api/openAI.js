import React, { useState } from 'react';
import { Modal, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ChatBot from './chatbot'; 
import { SafeAreaView } from 'react-native-safe-area-context';
const OpenAI = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:50 , fontWeight:'bold' , position:'absolute' , top: 100 , textAlign:'center' , color:'white' }}>Axiom AI</Text>
      <Text style={{fontSize:30 , fontWeight:'bold' , textAlign:'center' , color:'#709494' }}> Choose Your Bot</Text>
      <Text style={{fontSize:10}}>Click on Me or Button to get Started</Text>
      
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        {/* <Image source={require('./bot.png')} style={styles.image} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 20,padding: 10 , width: "90%" , justifyContent: 'center', alignItems: 'center' , backgroundColor: 'transparent' ,  borderRadius: 20 , borderWidth: 1 , borderColor: 'white' , width: '50%'}}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>Gemini!</Text>
      </TouchableOpacity>
      
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              onPress={() => setModalVisible(false)} 
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <ChatBot />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#060c11',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    padding: 5,
    borderRadius: 50,
    zIndex: 1000,
  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
    position: 'relative',
    borderRadius: 20,

  },
  closeButton: {
    position: 'absolute',
    top: 60,
    left: 10,

    padding: 10,
    borderRadius: 20,
    zIndex: 1100, 
  },
  closeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OpenAI;