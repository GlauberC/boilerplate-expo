import styled from "styled-components/native";
import { colors } from "../../styles/mainStyles";

interface IContainer {
  isErr: boolean;
}

export const Container = styled.View`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${({ isErr }: IContainer) =>
    isErr ? colors.error : colors.prim1};
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  margin-top: 20px;
  margin: 20px 10px 0 10px;
`;
export const TextInputBox = styled.TextInput`
  flex: 1;
  margin-left: 5px;
  font-size: 16px;
  color: ${colors.text1};
`;

export const ErrInfo = styled.Text`
  margin-top: 5px;
  color: ${colors.error};
  font-size: 12px;
  margin-left: 10px;
`;
