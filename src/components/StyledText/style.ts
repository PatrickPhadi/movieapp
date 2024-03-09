import { StyleSheet } from 'react-native'
import { colors, width } from '../../shared/assets/theme'

export default StyleSheet.create({
    titleContainer: {
        marginTop: 5,
        marginBottom: 15
    },
    subTitleContainer: {
        width: 100,
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.white,
    },
    descriptionContainer: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white
    },
    subTitle: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.white,
    },
    description: {
        fontSize: 16,
        color: colors.white
    },
})