import React, { useState, useRef, useCallback } from 'react';
import { TextInput } from 'react-native';
import Background from '../../../components/Background';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useAuth } from '../../../providers/auth.provider';

import * as S from './styles';

const SignIn: React.FC = () => {
  const { loading, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(async () => {
    const data = { email, password };
    await signIn(data);
  }, []);

  return (
    <Background scrollable>
      <Input
        label="Email"
        placeholder="Digite seu email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
        errMsg={errEmail}
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => {
          passwordInputRef.current?.focus();
        }}
      />

      <Input
        ref={passwordInputRef}
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
        returnKeyType="send"
        errMsg={errPassword}
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={handleSignIn}
      />
      <S.ButtonGroup>
        <Button
          iconName="keyboard-arrow-right"
          onPress={handleSignIn}
          loading={loading}
        >
          Entrar
        </Button>
      </S.ButtonGroup>
    </Background>
  );
};

export default SignIn;
