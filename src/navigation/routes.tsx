import MovieDetails from "../screens/movieDetails";
import SearchMovies from "../screens/searchMovies";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { IStackRoutes } from "../shared/interfaces";
import { colors } from "../shared/assets/theme";

export const Stack = createNativeStackNavigator();

export const stackRoutes: IStackRoutes[] = [
    {
        name: 'list',
        component: SearchMovies,
        options: {
            headerBackTitle: '',
            title: "Movies",
            headerShown: false
        }
    },
    {
        name: 'details',
        component: MovieDetails,
        options: {
            headerBackTitle: '',
            title: "Movie Details",
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: colors.primary
            },
        }
    }
]