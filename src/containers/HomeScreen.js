// mettre la bonne typo
// mettre effet dégradé = https://docs.expo.io/versions/latest/sdk/linear-gradient/
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  View,
  ScrollView,
  ImageBackground,
  Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      unicorn: require("../../assets/fonts/unicorn.ttf")
    });
    this.setState({ fontLoaded: true });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Accueil"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <>
            <Text
              style={{
                // flexDirection: "row",
                color: "#484c7f",
                fontSize: 80,
                textAlign: "center",
                justifyContent: "center",
                marginTop: 70,
                fontFamily: "unicorn"
              }}
            >
              Les animaux
            </Text>
            <View style={styles.category}>
              <View style={styles.ligne1}>
                <TouchableOpacity
                  style={styles.carreJungle}
                  onPress={() => {
                    this.props.navigation.navigate("Other", {
                      category: "Jungle"
                    });
                  }}
                >
                  <ImageBackground
                    source={require("./img-home/lion.png")}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "center"
                    }}
                  >
                    <View style={styles.rectanglesBlanc}>
                      <Text
                        style={{
                          color: "#383b60",
                          fontSize: 20
                        }}
                      >
                        Jungle
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.carreCompagnie}
                  onPress={() => {
                    this.props.navigation.navigate("Other", {
                      category: "Compagnie"
                    });
                  }}
                >
                  <ImageBackground
                    source={require("./img-home/cat.png")}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <View style={styles.rectanglesBlanc}>
                      <Text
                        style={{
                          color: "#383b60",
                          fontSize: 20
                        }}
                      >
                        Compagnie
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.ligne2}>
                <TouchableOpacity
                  style={styles.carreFerme}
                  onPress={() => {
                    this.props.navigation.navigate("Other", {
                      category: "La Ferme"
                    });
                  }}
                >
                  <ImageBackground
                    source={require("./img-home/pig.png")}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  >
                    <View style={styles.rectanglesBlanc}>
                      <Text
                        style={{
                          color: "#383b60",
                          fontSize: 20
                        }}
                      >
                        Ferme
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.carreForet}
                  onPress={() => {
                    this.props.navigation.navigate("Other", {
                      category: "Les forêts du monde"
                    });
                  }}
                >
                  <ImageBackground
                    source={require("./img-home/hib.png")}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover"
                    }}
                  >
                    <View style={styles.rectanglesBlanc}>
                      <Text
                        style={{
                          color: "#383b60",
                          fontSize: 20
                        }}
                      >
                        Forêt
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }

  showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8EFF0"
  },
  category: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    // marginTop: 20
  },

  carreJungle: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: "#F3C1C5",
    borderRadius: 10
  },
  carreCompagnie: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: "#B0E0A8",
    borderRadius: 10
  },
  carreFerme: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: "#F0F69E",
    borderRadius: 10
  },
  carreForet: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: "#AB93C8",
    borderRadius: 10
  },
  ligne1: {
    // backgroundColor: "green",
    flexDirection: "row"

    // justifyContent: "space-between"
  },
  ligne2: {
    // backgroundColor: "yellow",
    flexDirection: "row"
    // justifyContent: "space-between"
  },
  // ligne3: {
  //   // backgroundColor: "red",
  //   marginTop: 40
  // },
  rectangle: {
    flexDirection: "row",
    width: 330,
    height: 74,
    margin: 20,
    backgroundColor: "#9DDCDB",
    borderRadius: 10
  },
  rectanglesBlanc: {
    backgroundColor: "white",
    borderRadius: 6,
    width: 135,
    height: 25,
    position: "absolute",
    top: 120,
    left: 7,
    right: 7,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center"
  }
  // rectanglesBlancDevine: {
  //   backgroundColor: "white",
  //   borderRadius: 6,
  //   width: 250,
  //   height: 25,
  //   position: "absolute",
  //   top: 40,
  //   left: 40,
  //   right: 40,
  //   opacity: 0.7,
  //   justifyContent: "center",
  //   alignItems: "center"
  // }
});

export default HomeScreen;
