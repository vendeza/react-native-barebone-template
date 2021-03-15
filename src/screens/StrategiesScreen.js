import React from "react";
import { View, Text } from "react-native";

import ContainerView from "../components/ContainerView";
import commonStyles from "../styles/commonStyles";

export default class StrategiesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };

        this.onDataRefresh = this.onDataRefresh.bind(this);
    }

    onDataRefresh() {
        this.setState((p) => ({ ...p, refreshing: true }));
        this.fetchData();
    }

    fetchData() {
        // data fetching
    }

    render() {
        return (
            <ContainerView
                screenTitle={"Home"}
                onDataRefresh={() => {
                    this.onDataRefresh();
                }}
            >
                <View>
                    <Text style={commonStyles.h1}>{"Strategies Screen"}</Text>
                    <Text style={commonStyles.p}>{"Strategies screen content"}</Text>
                </View>
            </ContainerView>
        );
    }
}
