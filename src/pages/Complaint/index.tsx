import { View } from "react-native";
import Button from "@components/Button";
import { Container, Title } from "./style";
import InputContainer from "@components/InputContainer";

export default function PageMap() {
  return (
    <Container >
      <Title>Make your report here</Title>

      <View style={{ flex: 1 }}>
        <InputContainer textMsg="Insira uma imagem ou tire uma foto:" />
        <InputContainer textMsg="Localização:" />
        <InputContainer textMsg="Tipo de Desastre:" />
      </View>

      <Button
        typeBtn="DANGER" 
        onAction={() => null} 
        msg="Send Complaint"
        style={{ marginTop: 20, }} 
      />
    </Container>
  )
}
