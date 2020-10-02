import styled from 'styled-components/native';
import { colors, fontSizes, spacing } from '../../styles/mainStyles';

interface IContainer {
  isErr: boolean;
}

export const Label = styled.Text`
  margin-top: ${spacing.m};
  padding: 0 ${spacing.s};
  font-weight: bold;
  font-size: ${fontSizes.m};
`;
export const Container = styled.View`
  border-width: 2px;
  border-radius: 5px;
  border-color: ${({ isErr }: IContainer) =>
    isErr ? colors.error : colors.prim1};
  align-items: center;
  flex-direction: row;
  padding: ${spacing.xs} ${spacing.s};
  margin: ${spacing.s} ${spacing.s} 0 ${spacing.s};
`;
export const TextInputBox = styled.TextInput`
  font-size: ${fontSizes.m};
  color: ${colors.text1};
`;

export const ErrInfo = styled.Text`
  margin-top: ${fontSizes.xs};
  color: ${colors.error};
  font-size: ${fontSizes.s};
  margin-left: ${fontSizes.s};
`;
