import React, { ReactNode } from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/mainStyles';
import * as S from './styles';

interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  loading?: boolean;
  iconName: string;
}

const Button: React.FC<IButton> = ({
  children,
  loading,
  iconName,
  ...rest
}) => {
  return (
    <S.Container {...rest} activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color={colors.text1} />
      ) : (
        <S.ButtonContent>
          <MaterialIcons name={iconName} size={26} color={colors.text2} />
          <S.Label>{children}</S.Label>
        </S.ButtonContent>
      )}
    </S.Container>
  );
};

export default Button;
