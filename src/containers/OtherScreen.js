import React from "react";
// lien doc expo: https://docs.expo.io/versions/latest/sdk/audio/#playing-sounds

import Sounds from "../data/sounds";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import Swiper from "react-native-deck-swiper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class OtherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  state = {
    animals: null,
    isLoading: true,
    finish: false
  };

  componentDidMount = async () => {
    console.log("categorie  ", this.props.navigation.getParam("category"));
    const response = await axios.get(
      "https://timoumou-back.herokuapp.com/animals?category=" +
        this.props.navigation.getParam("category")
    );

    this.setState({
      animals: response.data,
      isLoading: false
    });
  };
  playingSound = async toto => {
    console.log("argument ===>", toto);
    // passer name en minusculte et enlever les accents
    toto = toto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    // {this.state.data &&
    //   // && = si this.state.data existe alors alors tu map = évite les erreurs
    //   this.state.data.map((item, index) => {
    //     // 9 . ajouter un map pour afficher le nom
    //     return this.state.gender === item.gender ? (
    //       <p>{item.name}</p>
    //     ) : // 11. Mettre une condition - si le state gender du titre est le meme
    //     //que gender de l'api (donc mal ou femelle ou robot) alors affiche le.
    //     // Sinon n'affiche rien
    //     null;
    //   })}

    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(Sounds[toto]);
      // clé dynamique
      await soundObject.playAsync();
    } catch (error) {
      console.log(error.message);
    }
  };
  render = () => {
    console.log(Sounds);

    return (
      <View style={styles.container}>
        <View style={{ height: SCREEN_HEIGHT - 200 }}>
          {!this.state.isLoading ? (
            this.state.finish ? (
              <View
                style={{
                  backgroundColor: "#D8EFF0",
                  alignItems: "center",
                  justifyContent: "center",
                  height: SCREEN_HEIGHT
                }}
              >
                <Icon name="heart-o" size={100} color="#484C7F" />
                <Text
                  style={{
                    fontSize: 100,
                    color: "#484C7F"
                  }}
                >
                  Bravo !
                </Text>
              </View>
            ) : (
              <Swiper
                cards={this.state.animals}
                renderCard={card => {
                  return (
                    <View
                      style={[
                        styles.card,
                        {
                          borderRadius: 20,
                          overflow: "hidden"
                        }
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => this.playingSound(card.name)}
                      >
                        <Image
                          source={{ uri: card.photo }}
                          style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                          }}
                          onError={err => console.log(err)}
                        />
                      </TouchableOpacity>
                      {/* <View>
                        {/* <Sound /> */}
                      {/* </View> */}
                    </View>
                  );
                }}
                onSwiped={cardIndex => {
                  console.log(cardIndex);
                }}
                onSwipedAll={() => {
                  this.setState({ finish: true }, () => {
                    setTimeout(() => {
                      this.props.navigation.navigate("Home");
                    }, 1000);
                  });
                  console.log("onSwipedAll");
                }}
                dragEnd={() => {
                  /* this.setState({ end: true }); */
                  console.log("dragEnd");
                }}
                onSwipedLeft={() => {
                  console.log("left");
                }}
                onSwipedRight={() => {
                  console.log("right");
                }}
                cardIndex={0}
                backgroundColor={"#D8EFF0"}
                stackSize={3}
                containerStyle={styles.swipperContainer}
              />
            )
          ) : (
            <Text>Chargement</Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "#D8EFF0",
            alignItems: "center",
            paddingBottom: 50
          }}
        >
          <Icon
            style={{
              justifyContent: "flex-end"
            }}
            name="home"
            type="font-awesome"
            color="#484C7F"
            size={60}
          />
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    /* alignItems: "center", */
    justifyContent: "space-between",
    backgroundColor: "#D8EFF0"
  },
  swipperContainer: {
    height: SCREEN_HEIGHT,
    backgroundColor: "#D8EFF0"
  },
  card: {
    height: SCREEN_HEIGHT - 200,
    borderColor: "#E8E8E8",
    borderWidth: 3,
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});

export default OtherScreen;
