import styled from 'styled-components/native';
import { colors, fontSizes, spacing } from '../../styles/mainStyles';

export const Container = styled.TouchableOpacity`
  background: ${colors.prim1};
  margin: ${spacing.s};
  padding: ${spacing.m};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${fontSizes.m};
  text-transform: uppercase;
  color: ${colors.text2};
  font-weight: bold;
`;
