import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles, cardStyles } from "./config";
import styles from "../styles";

const PhotoTabs = createMaterialTopTabNavigator(
  {
    Seelct: {
      screen: SelectPhoto,
      navigationOptions: {
        tabBarLabel: "Library"
      }
    },
    Take: {
      screen: TakePhoto,
      navigationOptions: {
        tabBarLabel: "Photo"
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        paddingBottom: 20,
        ...stackStyles
      },
      upperCaseLabel: false,
      activeTintColor: styles.blackColor,
      inactiveTintColor: styles.darkGreyColor,
      labelStyle: {
        fontWeight: "600"
      },
      indicatorStyle: {
        backgroundColor: null
      }
    }
  }
);

export default createStackNavigator(
  {
    Tabs: {
      screen: PhotoTabs,
      navigationOptions: {
        title: "Recents",
        headerBackTitle: "Cancel",
        headerBackImage: () => null
      }
    },
    Upload: {
      screen: UploadPhoto,
      navigationOptions: {
        title: "Upload",
        headerBackTitle: " "
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        ...stackStyles
      },
      cardStyle: {
        ...cardStyles
      },
      headerBackTitleStyle: styles.backTitleStyle,
      headerLeftContainerStyle: styles.LeftContainerStyle,
      headerTintColor: styles.blackColor
    }
  }
);
