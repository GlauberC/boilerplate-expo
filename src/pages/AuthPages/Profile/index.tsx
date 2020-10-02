import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Button';
import { useAuth } from '../../../providers/auth.provider';

const Profile: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Button iconName="exit-to-app" onPress={signOut}>
      Deslogar
    </Button>
  );
};

export default Profile;
