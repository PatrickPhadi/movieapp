import { SafeAreaView } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useMovies, useAppSelector } from '../../hooks';
import { StyledFlatList, StyledMovieCard, StyledTextInput } from '../../components'

const SearchMovies = (props: any): JSX.Element => {
    const { navigation } = props;
    const [searchValue, setSearchValue] = React.useState("");
    const movies = useAppSelector(state => state.movies);
    const movieDetails = useAppSelector(state => state.movieDetails);
    const searching = useAppSelector(state => state.searching);
    const { getMovieDetails, searchMovies } = useMovies();

    useEffect(() => {
        searchMovies("", "fetch");
    }, []);

    useEffect(() => {
        if (movieDetails) {
            navigation.navigate("details");
        }
    }, [movieDetails]);

    const handleViewDetails = (movieId: string) => {
        if (!movieId) return null;
        getMovieDetails(movieId);
    };

    const handleSearch = useCallback((value: string) => {
        setSearchValue(value);
        if (value.length > 2) {
            searchMovies(value, "search");
        }
    }, [searchValue]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StyledTextInput
                label="Search a movie"
                value={searchValue}
                searching={searching}
                onChangeText={handleSearch}
            />
            <StyledFlatList
                numColumns={2}
                data={movies}
                renderItem={({ item }: { item: any }) => {
                    return (
                        <StyledMovieCard
                            title={item['#TITLE']}
                            itemId={item["#IMDB_ID"]}
                            picture={item["#IMG_POSTER"]}
                            onPress={handleViewDetails}
                        />
                    )
                }}
            />
        </SafeAreaView>
    )
}
export default SearchMovies;