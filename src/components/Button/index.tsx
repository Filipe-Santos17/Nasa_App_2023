import { TouchableOpacityProps } from "react-native";
import { ButtonTouch, TextButton } from "./style";

type ButtonType = TouchableOpacityProps & {
  msg: string,
  onAction?: () => void,
  typeBtn: string,
}

export default function Button({ msg, onAction, typeBtn, ...others }: ButtonType) {
  return (
    <ButtonTouch onPress={onAction} type={typeBtn} {...others}>
      <TextButton>
        {msg}
      </TextButton>
    </ButtonTouch>
  )
}
