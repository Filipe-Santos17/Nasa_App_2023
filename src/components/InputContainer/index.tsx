import { InputText, ContainerInput, LabelText } from './style'

export default function InputContainer({ textMsg }: { textMsg: string }) {
  return (
    <ContainerInput>
      <LabelText>{textMsg}</LabelText>
      <InputText />
    </ContainerInput>
  )
}
