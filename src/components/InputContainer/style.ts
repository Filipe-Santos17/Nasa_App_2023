import styled from "styled-components/native";

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  align-items: flex-start;
`;

export const LabelText = styled.TextInput`
  font-size: 15px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;