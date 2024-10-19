import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const GEMINI_API_KEY = "AIzaSyBesFEgtGmReYFNR-3lAKuG7htGOJbe_Sk";

const ChatBot = () => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleButtonClick = async () => {
    if (!msg.trim()) return;

    const userMessage = { text: msg, sender: "user" };
    setMessages((prevMessages) => [userMessage, ...prevMessages]);
    setMsg("");

    if (messages.length === 0) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: msg,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("Full API Response:", data);

      let reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      reply = reply.replace(/\*/g, "");

      const geminiMessage = { text: reply, sender: "gemini" };
      setMessages((prevMessages) => [geminiMessage, ...prevMessages]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { text: "Error occurred", sender: "gemini" };
      setMessages((prevMessages) => [errorMessage, ...prevMessages]);
    }
  };

  const messageSave = (text) => {
    setMsg(text);
    console.log(text);
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.message,
        item.sender === "user" ? styles.userMessage : styles.geminiMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === "user"
            ? styles.userMessageText
            : styles.geminiMessageText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        {messages.length === 0 && (
          <Animated.View
            style={[styles.welcomeContainer, { opacity: fadeAnim }]}
          >
            <Text style={styles.welcomeText}>Welcome to Chat Bot</Text>
            {/* <Image
              source={require("../../assets/g2.jpg")}
              style={{ width: 300, height: 350 }}
              resizeMode="cover"
            /> */}
          </Animated.View>
        )}
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messagesContainer}
          inverted
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Message Jarvis...."
            value={msg}
            onChangeText={messageSave}
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcomeContainer: {
    position: "absolute",
    top: "40%",
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#709494",
    textAlign: "center",
  },
  messagesContainer: {
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  message: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#1b313b",
  },
  geminiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#4e7d8e",
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: "white",
  },
  geminiMessageText: {
    color: "white",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginRight: 10,
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "#1b313b",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ChatBot;
