import React, { useState, useRef, useCallback } from 'react';
import { TextInput } from 'react-native';
import * as Yup from 'yup';
import Background from '../../../components/Background';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useAuth } from '../../../providers/auth.provider';

import * as Styled from './styles';
import signInValidation from './signInValidation';
import getValidationErrors from '../../../util/getValidationErrors';

const SignIn: React.FC = () => {
  const { loading, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const setErrors = useCallback((errors) => {
    errors.email && setErrEmail(errors.email);
    errors.password && setErrPassword(errors.password);
  }, []);

  const resetErrors = useCallback(() => {
    setErrEmail('');
    setErrPassword('');
  }, []);

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(async () => {
    resetErrors();
    const data = { email, password };
    try {
      await signInValidation(data);
      await signIn(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrors(getValidationErrors(err));
      }
    }
  }, [email, password, resetErrors, setErrors, signIn]);

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
      <Styled.ButtonGroup>
        <Button
          iconName="keyboard-arrow-right"
          onPress={handleSignIn}
          loading={loading}
        >
          Entrar
        </Button>
      </Styled.ButtonGroup>
    </Background>
  );
};

export default SignIn;
