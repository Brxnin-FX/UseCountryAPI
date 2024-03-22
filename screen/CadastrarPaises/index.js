import React, { useState } from 'react';
import axios from "axios";
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const CadastrarPaisScreen = () => {
  const navigation = useNavigation();
  const [nomePais, setNomePais] = useState('');
  const [capital, setCapital] = useState('');

  const criarPais = async () => {
    try {
      const response = await axios.post('http://localhost:8080/pais', {
        nome: nomePais,
        capital: capital,
      });
      console.log('País cadastrado:', response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao cadastrar país:', error);
    }
  };

  const handleNomeChange = (text) => {
    setNomePais(text);
  };

  const handleCapitalChange = (text) => {
    setCapital(text);
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro de País</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do País"
        value={nomePais}
        onChangeText={handleNomeChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Capital"
        value={capital}
        onChangeText={handleCapitalChange}
      />
      <Button title="Salvar" onPress={criarPais} />
    </View>
  );
};

export default CadastrarPaisScreen;
