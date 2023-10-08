import styled from "styled-components/native"
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFF;
  padding:  12px 24px 12px;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
`;