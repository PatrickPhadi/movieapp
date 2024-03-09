import { View, Text, Pressable, Image } from 'react-native'
import PropTypes from 'prop-types';
import styles from "./style";

interface IStyledMovieCard {
    title: string;
    picture: string;
    itemId: string;
    onPress?: (value: string) => void;
}

const StyledMovieCard = ({ title, picture, itemId, onPress }: IStyledMovieCard) => (
    <Pressable disabled={!onPress} onPress={() => (onPress && itemId) && onPress(itemId)}>
        <View style={styles.container}>
            <Image style={styles.picture} source={{ uri: picture }} />
            <View style={styles.content}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>{title}</Text>
            </View>
        </View>
    </Pressable>
)

StyledMovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

export default StyledMovieCard