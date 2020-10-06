import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles/mainStyles';
import * as Styled from './styles';

interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  loading?: boolean;
  iconName: string;
}

const CustomButton: React.FC<IButton> = ({
  children,
  loading,
  iconName,
  ...rest
}) => {
  return (
    <Styled.Container
      mode="contained"
      icon={() => (
        <MaterialIcons name={iconName} size={26} color={colors.text2} />
      )}
      loading={loading}
      {...rest}
    >
      {children}
    </Styled.Container>
  );
};

export default CustomButton;
