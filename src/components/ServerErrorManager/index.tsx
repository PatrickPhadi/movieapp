import { Text, View, Modal } from "react-native";
import { useAppSelector } from "../../hooks";
import styles from "./style";

const ServerErrorManager = (): JSX.Element => {
    const error = useAppSelector(state => state.error);

    if (error) {
        return (
            <Modal visible={true} transparent={true}>
                <View style={styles.spinnerWrapper}>
                    <Text>{error}</Text>
                </View>
            </Modal>
        );
    }

    return <></>
}

export default ServerErrorManager;