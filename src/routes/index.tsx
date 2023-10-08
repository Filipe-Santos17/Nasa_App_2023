import { View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"

import { AppRoutes } from "./app.routes"

import { useTheme } from "styled-components/native"

export default function RoutesComponentes() {
  //O View preveni o efeito de tela de piscar com fundo branco ao mudar de tela
  const { COLORS } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
