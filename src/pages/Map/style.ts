import MapView from 'react-native-maps';
import styled from "styled-components/native"

export const MapContainer = styled.View`
  flex: 1;
  background-color: "#fff";
  align-items: center;
  justify-content: center;
`;

export const MapElement = styled(MapView)`
  flex: 1;
  width: 100%;
`;
