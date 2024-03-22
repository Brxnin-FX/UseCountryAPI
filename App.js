import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CadastrarPaisScreen from './screen/CadastrarPaises';
import PaisesScreen from './screen/Paises';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Página Inicial' }}
        />
        <Stack.Screen
          name="CadastrarPais"
          component={CadastrarPaisScreen}
          options={{ title: 'Cadastrar País' }}
        />
        <Stack.Screen
          name="Paises"
          component={PaisesScreen}
          options={{ title: 'Paises Cadastrados' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botão Cadastrar País */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastrarPais')}
      >
        <Text style={styles.buttonText}>Cadastrar País</Text>
      </TouchableOpacity>

      {/* Botão Atualizar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Paises')}
      >
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0e2d5e',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
