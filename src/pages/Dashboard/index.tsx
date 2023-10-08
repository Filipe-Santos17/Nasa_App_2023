import { Text, View, Image } from "react-native"
import { Container } from "./style"

export default function Dashboard() {
  return (
    <Container>
      <Image source={require('../../assets/mobile-image-dashboard.png')} style={{width: 300, height: 500, objectFit: 'contain'}}/>
    </Container>
  )
}
