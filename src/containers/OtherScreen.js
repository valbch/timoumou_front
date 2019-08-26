import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import axios from "axios";

class OtherScreen extends React.Component {
  state = {
    animals: [],
    // animals_by_category: {},
    isLoading: true
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Autre page"
    };
  };
  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3000/animals");

    // response.data.map(animal => {

    // });

    this.setState({
      animals: response.data,
      // animals_by_category: {},
      isLoading: false
    });
  };

  render() {
    if (this.state.animals) {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.animals}
            keyExtractor={item => String(item._id)}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: item.photo }}
                />
              </View>
            )}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default OtherScreen;
