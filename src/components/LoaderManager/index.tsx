import React from "react";
import { ActivityIndicator, View, Modal } from "react-native";
import styles from "./style";
import { colors } from "../../shared/assets/theme";
import { useAppSelector } from "../../hooks";

const LoaderManager = (): JSX.Element => {
    const loading = useAppSelector(state => state.loading);

    if (loading) {
        return (
            <Modal visible={true} transparent={true}>
                <View style={styles.spinnerWrapper}>
                    <View style={styles.spinner}>
                        <ActivityIndicator size="large" color={colors.darkgrey} />
                    </View>
                </View>
            </Modal>
        );
    }

    return <></>
}

export default LoaderManager;