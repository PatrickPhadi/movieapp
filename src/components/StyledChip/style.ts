import { StyleSheet } from 'react-native'
import { colors } from '../../shared/assets/theme'

export default StyleSheet.create({
    text: {
        fontSize: 14,
        color: colors.white,
    },
    chip: {
        margin: 4,
        borderRadius: 13,
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: colors.white
    },
})