import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from "axios";

export default class PlayingSound extends React.Component {
  // componentDidMount() {
  //   this.hello = new Sound("cat.mp3", Sound.MAIN_BUNDLE, error => {
  //     if (error) {
  //       console.log("failed to load the sound", error);
  //       return;
  //     }
  //   });
  // }

  handlePress() {
    this.hello.play(success => {
      if (!success) {
        console.log("Sound did not play");
      }
    });
  }

  render() {
    const { animal } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress.bind(this)}>
        <View>
          <Text>Start</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
