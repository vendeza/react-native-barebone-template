import { Platform, StyleSheet } from "react-native";
import colors from "./colors";

const iconContainer = {
    width: 32,
    height: 32,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
};

const commonStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    h1: {
        fontSize: 28,
        lineHeight: 28,
        fontWeight: "700",
        color: colors.black,
    },
    h2: {
        fontSize: 22,
        fontWeight: Platform.OS === "android" ? "700" : "600",
    },
    h3: {
        fontSize: 18,
        fontWeight: Platform.OS === "android" ? "700" : "600",
    },

    h4: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: "400",
        color: colors.lightGray,
    },
    p:{
        fontSize: 14,
        lineHeight: 18,
        color: colors.lightGray,
    },
    title: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 20,
    },
    subTitle: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: "400",
        color: colors.lightGray,
    },

    container: {
        backgroundColor: colors.lightBlue,
        flex: 1,
        flexDirection: "column",
        marginTop: 0,
        padding: 50,
    },

    breakRow: {
        height: 0,
        flexBasis: "100%",
    },

    iconContainer: {
        ...iconContainer,
    },
    blueconContainer: {
        ...iconContainer,
        backgroundColor: colors.blue,
    },
    redIconContainer: {
        ...iconContainer,
        backgroundColor: colors.stoutRed,
    },
    orangeIconContainer: {
        ...iconContainer,
        backgroundColor: colors.orange,
    },
    greenIconContainer: {
        ...iconContainer,
        backgroundColor: colors.green,
    },
});

export default commonStyles;
