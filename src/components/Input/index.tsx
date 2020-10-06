import React, { useRef, useImperativeHandle, forwardRef } from 'react';

import { TextInputProps } from 'react-native';
import { colors } from '../../styles/mainStyles';

import * as Styled from './styles';

interface InputProps extends TextInputProps {
  label: string;
  errMsg: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { errMsg, value, label, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Container isErr={errMsg.length > 0}>
        <Styled.TextInputBox
          {...rest}
          value={value}
          placeholderTextColor={colors.placeholder}
          ref={inputElementRef}
        />
      </Styled.Container>
      {errMsg !== '' && <Styled.ErrInfo>{errMsg}</Styled.ErrInfo>}
    </>
  );
};

export default forwardRef(Input);
