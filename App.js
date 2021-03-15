import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import StrategiesScreen from "./src/screens/StrategiesScreen";
import OptionsScreen from "./src/screens/OptionsScreen";
import Icons from "react-native-vector-icons/MaterialIcons";

const Screens = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
        let iconName;

        if (route.name === "Main") {
            iconName = "home";
        } else if (route.name === "Strategies") {
            iconName = "insert-chart-outlined";
        } else if (route.name === "Option") {
            iconName = "multiline-chart";
        } else {
            return;
        }

        return (
            <Icons
                name={iconName}
                size={22}
                color={focused ? "#007AFF" : "#A1A1A1"}
            />
        );
    },
});

const TabsStackScreen = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Main" component={HomeScreen} />
            <Tab.Screen name="Option" component={OptionsScreen} />
            <Tab.Screen name="Strategies" component={StrategiesScreen} />
        </Tab.Navigator>
    );
};

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "rgb(45,129,255)",
        background: "#fff",
    },
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <NavigationContainer theme={MyTheme}>
                <Screens.Navigator>
                    <Screens.Screen
                        name={"Options mobile"}
                        component={TabsStackScreen}
                    />
                </Screens.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
