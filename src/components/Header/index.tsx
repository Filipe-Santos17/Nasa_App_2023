import { View, Image } from "react-native";
import { HeaderUser, ImageUser } from "./style";
import { Feather } from '@expo/vector-icons'; 

export default function HeaderHome() {
  return (
    <HeaderUser>
      <Feather name="menu" size={24} color="black" />
      <ImageUser source={{uri: 'https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg'}}/>
    </HeaderUser>
  )
}