import React, { useRef, useImperativeHandle, forwardRef } from "react";

import { colors } from "../../styles/mainStyles";

import { TextInputProps } from "react-native";

import * as S from "./styles";

interface InputProps extends TextInputProps {
  errMsg: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { errMsg, value, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <>
      <S.Container isErr={errMsg.length > 0}>
        <S.TextInputBox
          {...rest}
          value={value}
          placeholderTextColor={colors.placeholder}
          ref={inputElementRef}
        />
      </S.Container>
      {errMsg !== "" && <S.ErrInfo>{errMsg}</S.ErrInfo>}
    </>
  );
};

export default forwardRef(Input);
