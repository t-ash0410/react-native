import React from 'react';
import { Header } from 'react-native-elements';

export default function AppHeader() {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'タスク管理', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}
