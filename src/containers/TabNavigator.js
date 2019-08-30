import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarVisible: false, // pour supprimer la barre de navigation du bas : accueil et parametre
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case "Home":
            iconName = "ios-home";

            break;
          case "Settings":
            iconName = "ios-settings";

            break;
          default:
            iconName = null;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle;

  switch (routeName) {
    case "Home":
      headerTitle = "Ti Moumou App";
      break;
    case "Settings":
      headerTitle = "Paramètres";
      break;
    default:
      headerTitle = routeName;
  }

  return {
    headerTitle: headerTitle,

    headerStyle: {
      backgroundColor: "#D8EFF0"
      // font: "Chalkboard SE"
    },
    headerTitleStyle: {
      color: "#484c7f",

      fontSize: 20
    }
  };
};

export default TabNavigator;
