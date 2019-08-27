import React from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-deck-swiper";
// import ViewOverflow from "react-native-view-overflow";

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
        // <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Swiper
            cards={this.state.animals}
            renderCard={card => {
              return (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red"
                  }}
                >
                  <ImageBackground
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                    resizeMode="cover"
                    source={{
                      uri: card.photo
                    }}
                  />
                </View>
              );
            }}
            onSwiped={cardIndex => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              console.log("onSwipedAll");
            }}
            cardIndex={0}
            backgroundColor={"red"}
            stackSize={3}
          >
            <Button
              onPress={() => {
                console.log("oulala");
              }}
              title="Press me"
            >
              You can press me
            </Button>
          </Swiper>
        </View>
        // </ScrollView>
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
