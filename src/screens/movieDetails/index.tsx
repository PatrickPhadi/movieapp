import { View, Text, ScrollView } from 'react-native';
import { useAppSelector } from '../../hooks';
import { StyledChip, StyledImageWithBackground, StyledText } from '../../components';
import style from './style';

const MovieDetails = (): JSX.Element => {
    const movieDetails: any = useAppSelector(state => state.movieDetails);

    return (
        <ScrollView style={{ marginBottom: 40 }}>
            <StyledImageWithBackground source={movieDetails?.short?.image} />
            <View style={style.contentWrapper}>
                <StyledText value={movieDetails?.short?.name} variant="title" />
                <StyledText value={movieDetails?.short?.description} variant="description" />
                <StyledText value="Actors" variant="subTitle" />
                <View style={style.actorWrapper}>
                    {movieDetails?.short?.actor?.map((actor: any, key: string) =>
                        <StyledChip key={key} value={actor.name} />
                    )}
                </View>
                <StyledText value="Keywords" variant="subTitle" />
                <View style={style.actorWrapper}>
                    {movieDetails?.short?.keywords?.split(',')?.map((keyword: any, key: string) =>
                        <StyledChip key={key} value={keyword} />
                    )}
                </View>
                <StyledText value="Reviews" variant="subTitle" />
                {/* TODO review data is not clear, couldn't find review array */}
            </View>
        </ScrollView>
    )
}

export default MovieDetails;