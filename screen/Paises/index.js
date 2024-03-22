import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import styles from './Styles';

const PaisesScreen = () => {
  const [paises, setPaises] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPais, setSelectedPais] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editedCapital, setEditedCapital] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    listarPaises();
  }, []);

  const listarPaises = async () => {
    try {
      const response = await axios.get('http://localhost:8080/pais');
      setPaises(response.data);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const handleEditar = (id, nome, capital) => {
    setSelectedPais({ id, nome, capital });
    setEditedNome(nome);
    setEditedCapital(capital);
    setModalVisible(true);
  };

  const handleSalvarEdicao = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/pais/${selectedPais.id}`, {
        nome: editedNome,
        capital: editedCapital,
      });
      console.log(`Alterações salvas para o país com ID ${selectedPais.id}`);
      setModalVisible(false);
      
      const updatedPaises = paises.map(pais => pais.id === selectedPais.id ? { ...pais, nome: editedNome, capital: editedCapital } : pais);
      setPaises(updatedPaises);
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
    }
  };

  const handleDeletar = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pais/${id}`);
      console.log(`País com ID ${id} deletado.`);
      const updatedPaises = paises.filter(pais => pais.id !== id);
      setPaises(updatedPaises);
    } catch (error) {
      console.error('Erro ao deletar país:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pais/nome/${searchTerm}`);
      setPaises(response.data);
    } catch (error) {
      console.error('Erro na busca por nome:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Bloco de Países Cadastrados</Text>
      <View style={styles.searchContainer}>  
        <TextInput
          style={styles.input}
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Capital</Text>
        <Text style={styles.headerText}>Ações</Text>
      </View>
      <FlatList
        data={paises}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.rowText}>{item.nome}</Text>
            <Text style={styles.rowText}>{item.capital}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => handleEditar(item.id, item.nome, item.capital)}>
                <Icon name="edit" size={24} color="blue" />
              </TouchableOpacity>

              <View><Text>&nbsp;</Text></View>

              <TouchableOpacity onPress={() => handleDeletar(item.id)}>
                <Icon name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar País</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={editedNome}
              onChangeText={setEditedNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Capital"
              value={editedCapital}
              onChangeText={setEditedCapital}
            />
            <TouchableOpacity style={styles.btn_cancelar} onPress={() => setModalVisible(false)}>
              <Text style={styles.btnText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_salvar} onPress={handleSalvarEdicao}>
              <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaisesScreen;
