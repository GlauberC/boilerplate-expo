import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors, spacing } from '../../styles/mainStyles';

export const Container = styled(Button)`
  background: ${colors.prim1};
  height: 50px;
  justify-content: center;
  border-radius: 5px;
  margin: ${spacing.s};
`;
