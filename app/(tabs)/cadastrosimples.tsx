/* NATHAN MARQUES DO NASCIMENTO = MB) */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [idade, setIdade] = useState('');

  const salvarDados = async () => {
    try {
      const dados = {
        nome,
        endereco,
        idade,
      };
      await AsyncStorage.setItem('dadosUsuario', JSON.stringify(dados));
      alert('Dados salvos com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Erro ao salvar os dados.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

    <TouchableOpacity style={styles.button} onPress={salvarDados}>
    <Text style={styles.buttonText}>Gravar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  input: {
    width: '70%', 
    borderWidth: 1,
    borderColor: '#b0c4de',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 18,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    width: '70%',
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
