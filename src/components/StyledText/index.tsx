import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import style from "./style";

type variant = "title" | "subTitle" | "description";

interface IStyledText {
    value: string;
    variant?: variant;
}

const StyledText = ({
    value, variant = "description"
}: IStyledText) => {
    return (
        <View style={style[`${variant}Container`]}>
            <Text style={style[variant]}>{value}</Text>
        </View>
    )
}

StyledText.propTypes = {
    value: PropTypes.string.isRequired
};

export default StyledText;