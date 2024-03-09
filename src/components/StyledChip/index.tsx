import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import style from "./style";

interface IStyledChip {
    value: string;
}

const StyledChip = ({
    value
}: IStyledChip) => {
    return (
        <View style={style.chip}>
            <Text style={style.text}>{value}</Text>
        </View>
    )
}

StyledChip.propTypes = {
    value: PropTypes.string.isRequired
};

export default StyledChip