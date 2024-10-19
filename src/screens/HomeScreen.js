import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Voice from '@react-native-voice/voice';
// import * as GoogleGenerativeAI from "@google/generative-ai";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Features from "../components/features";
import { dummyMessages } from "../constants/index";
import {useNavigation} from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const [messages, setMessages] = React.useState(dummyMessages);
  const [recording, setRecording] = React.useState(false);
  const [speaking, setSpeaking] = React.useState(true);
  // const [result, setResult] = React.useState('');
  const clear = () => {
    setMessages([]);
  };
  const stopSpeaking = () => {
    setSpeaking(false);
  };

  const speechStartHandler = () => {
    console.log("speechStartHandler");
  };
  const speechEndHandler = () => {
    setRecording(false);

    console.log("speechEndHandler");
  };
  const SpeechResultsHandler = (e) => {
    console.log("Voice Event:", e);
  };
  const SpeechErrorHandler = (e) => {
    console.log("SpeechErrorHandler", e);
  };
  // useEffect(() => {
  //   Voice.onSpeechStart = speechStartHandler;
  //   Voice.onSpeechEnd = speechEndHandler;
  //   Voice.onSpeechResults = SpeechResultsHandler;
  //   Voice.onSpeechError = SpeechErrorHandler;

  //   const start = async () => {
  //     try {
  //       await Voice.start('en-US');
  //       setRecording(true);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   if (recording) {
  //     start();
  //   }

  //   const stop = async () => {
  //     try {
  //       await Voice.stop();
  //       setRecording(false);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   if (!recording) {
  //     stop();
  //   }

  //   return () => {
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   };
  // });

  // useEffect(() => {
  //   const startChat = async () => {
  //   const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //   const prompt = "Write a story about a magic backpack.";

  //   const result = await model.generateContent(prompt);
  //   console.log(result.response.text());
  //       };
  //   startChat();
  // },[])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView
        style={{ display: "flex", flex: 1, marginLeft: 10, marginRight: 10 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/home.jpeg")}
            style={{ width: wp(15), height: hp(15) }}
          />
        </View>

        {/* Messages  */}
        {messages.length > 0 ? (
          <View style={{ flex: 1, marginTop: 10 }}>
            <Text
              style={{
                fontWeight: "semibold",
                color: "gray",
                fontSize: wp(5),
                marginLeft: 10,
              }}
            >
              Assistant
            </Text>
            <View
              style={{
                fontSize: wp(5),
                backgroundColor: "lightpink",
                borderRadius: 20,
                padding: 10,
                height: hp(60),
              }}
            >
              <ScrollView
                style={{ marginTop: 10 }}
                showsVerticalScrollIndicator={false}
                bounces={false}
              >
                {messages.map((message, index) => {
                  if (message.role === "assistant") {
                    if (message.content.includes("https")) {
                      {
                        /* ai image  */
                      }
                      return (
                        <View
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              backgroundColor: "lightgreen",
                              borderRadius: 20,
                              borderTopLeftRadius: 0,
                              padding: 10,
                            }}
                          >
                            <Image
                              source={{ uri: message.content }}
                              style={{
                                width: wp(70),
                                height: wp(70),
                                padding: 10,
                              }}
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                      );
                    } else {
                      {
                        /* text responnse  */
                      }
                      return (
                        <View
                          key={index}
                          style={{
                            width: wp(70),
                            backgroundColor: "lightgreen",
                            borderRadius: 20,
                            borderTopLeftRadius: 0,
                            padding: 10,
                            marginBottom: 10,
                          }}
                        >
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    {
                      /* user input  */
                    }
                    return (
                      <View
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            width: wp(70),
                            backgroundColor: "white",
                            borderRadius: 20,
                            borderTopRightRadius: 0,
                            padding: 10,
                            marginBottom: 10,
                          }}
                        >
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* recording clear and stop */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {recording ? (
            <TouchableOpacity>
              <Image
                source={require("../../assets/mic.png")}
                c
                style={{ width: wp(25), height: hp(10) }}
              ></Image>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={require("../../assets/voicemic.jpeg")}
                style={{ width: wp(20), height: hp(10) }}
              ></Image>
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              style={{
                backgroundColor: "gray",
                borderRadius: 20,
                padding: 10,
                position: "absolute",
                right: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: wp(4),
                }}
              >
                Clear
              </Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={clear}
              style={{
                backgroundColor: "red",
                borderRadius: 20,
                padding: 10,
                position: "absolute",
                left: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: wp(4),
                }}
              >
                Stop
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
        onPress={() => navigation.navigate('OpenAI')}
        style={{
          backgroundColor: 'aqua',
          marginLeft: 5,
          padding: 7,
          marginRight: 5,
          borderRadius: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            fontSize: wp(6),
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
