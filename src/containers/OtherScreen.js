import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";

class OtherScreen extends React.Component {
  state = {
    animals: null,
    isLoading: true
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Autre page"
    };
  };
  componentDidMount = async () => {
    console.log("categorie  ", this.props.navigation.getParam("category"));
    const response = await axios.get(
      "http://localhost:3000/animals?category=" +
        this.props.navigation.getParam("category")
    );

    this.setState(
      {
        animals: response.data,
        isLoading: false
      },
      () => {
        console.log("aloooo 2   ", response.data);
      }
    );
  };

  render() {
    if (this.state.animals) {
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Swiper showsButtons={true}>
              {this.state.animals &&
                this.state.animals.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "red"
                      }}
                    >
                      {/* <Image
                        source={{
                          uri: item.photo
                        }}
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      /> */}
                      <ImageBackground
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                        source={{
                          uri: item.photo
                        }}
                      />
                    </View>
                  );
                })}
            </Swiper>
          </View>
        </ScrollView>
      );
    }
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  }
});

export default OtherScreen;
