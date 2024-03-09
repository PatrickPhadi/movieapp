import { NavigationContainer } from '@react-navigation/native'
import { theme } from '../shared/assets/theme'
import { Stack, stackRoutes } from "./routes";

const Navigation = (): JSX.Element => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="list">
                {stackRoutes.map((route, key) =>
                    <Stack.Screen key={key} {...route} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation