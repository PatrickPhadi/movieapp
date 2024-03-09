import { StyleSheet } from 'react-native';
import { width, colors } from "../../shared/assets/theme";

export default StyleSheet.create({
    textInputContainer: {
        flex: 1,
    },
    containedInput: {
        fontStyle: 'normal',
        fontSize: 15,
        borderColor: colors.lightgrey,
        borderWidth: .5,
        marginVertical: 3,
        paddingLeft: 5,
        borderRadius: 5,
        backgroundColor: colors.lightgrey,
        color: colors.darkgrey,
        height: 40
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
        marginTop: 12,
    }
});