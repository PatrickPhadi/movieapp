import { StyleSheet } from 'react-native';
import { colors, width } from '../../shared/assets/theme';

const borderRadius = 8;

export default StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: "600",
        color: colors.white
    },
    container: {
        borderWidth: .5,
        borderRadius,
        borderColor: colors.lightgrey,
        margin: 5
    },
    picture: {
        aspectRatio: 0.7,
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius
    },
    content: {
        width: width * .43,
        marginVertical: 2,
        height: 50,
        padding: 5
    },
    description: {
        marginVertical: 3,
        color: colors.darkgrey,
        fontWeight: "bold",
    }
})