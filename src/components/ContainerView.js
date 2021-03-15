import React  from "react";
import PropTypes from "prop-types";
import {
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView,

} from "react-native";
import commonStyles from "../styles/commonStyles";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/Feather";

/** PROPS:
 *  children,
 *  screenTitle,
 *  onDataRefresh,
 *  refreshing,
 *  pending,
 *  color
 */

export default class ContainerView extends React.Component {
    constructor(props) {
        super(props);
        // this.navigation = useNavigation();

    }

    render() {
        return (
            <SafeAreaView
                style={{
                    ...commonStyles.mainContainer,
                    backgroundColor: this.props.containerColor
                        ? this.props.containerColor
                        : colors.backgroundColor,
                }}
            >
                <StatusBar
                    translucent
                    barStyle="dark-content"
                />
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: this.props.containerColor,
                    }}
                >
                    {this.props.children}
                </View>
            </SafeAreaView>
        );
    }
}

ContainerView.defaultProps = {
    children: null,
    screenTitle: "Title",
    onDataRefresh: () => {
    },
    refreshing: false,
    pending: false,
    containerColor: colors.backgroundColor,
    isSticky: true,
    isBackButton: false,
};

ContainerView.propTypes = {
    children: PropTypes.node,
    screenTitle: PropTypes.string,
    onDataRefresh: PropTypes.func,
    refreshing: PropTypes.bool,
    pending: PropTypes.bool,
    containerColor: PropTypes.string,
    isSticky: PropTypes.bool,
    isBackButton: PropTypes.bool,
};
const styles = StyleSheet.create({
    container: {
        ...commonStyles.container,
    },
});
