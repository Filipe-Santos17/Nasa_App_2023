import { StatusBar, Text } from 'react-native';

//Estilização Global
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

//Fonts 
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

//Rotas
import RoutesComponentes from './src/routes';

export default function App() {

  const [isFontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {isFontLoaded ? <RoutesComponentes /> : <Text>a22222222</Text>}
    </ThemeProvider>
  );
}
