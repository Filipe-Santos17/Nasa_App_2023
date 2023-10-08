import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  type: "DANGER" | "SECONDARY"
}

export const ButtonTouch = styled(TouchableOpacity) <ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) => type === 'DANGER' ? theme.COLORS.RED : theme.COLORS. GRAY_300};

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-family: "Roboto_700Bold";
`;