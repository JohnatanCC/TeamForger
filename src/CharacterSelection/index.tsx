// ======== > src/CharacterSelection/index.tsx < ========
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Animated,
} from "react-native";
import styles from "./style";
import Toast from "react-native-toast-message";
import { characters } from "../data/charactersData"; // Usar a lista de personagens
import { getClassColor } from "../utils/classColors"; // Importar a lógica para obter cores da classe

const CharacterSelection = ({ route, navigation }: any) => {
  const [selectedCharacters, setSelectedCharacters] = useState(
    route.params?.selectedCharacters || []
  );
  const [teamName, setTeamName] = useState("");
  const scaleValue = useRef(new Animated.Value(1)).current; // Valor de animação

  useEffect(() => {
    if (route.params?.selectedCharacters) {
      setSelectedCharacters(route.params.selectedCharacters);
    }
  }, [route.params?.selectedCharacters]);

  // Função para animar a seleção de personagem
  const animateSelection = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleRemoveCharacter = (characterId: string) => {
    const updatedSelection = selectedCharacters.filter(
      (character: { id: string }) => character.id !== characterId
    );
    setSelectedCharacters(updatedSelection);
    Toast.show({
      type: "info",
      text1: "Lutador Removido",
      text2: "O lutador foi removido da seleção.",
    });
  };

  const handleCreateTeam = () => {
    if (selectedCharacters.length < 3) {
      Alert.alert("Seleção insuficiente", "Selecione pelo menos 3 lutadores.");
    } else if (teamName.trim() === "") {
      Alert.alert("Nome do Time", "Por favor, insira um nome para o seu time.");
    } else {
      const newTeam = {
        id: Date.now().toString(),
        name: teamName,
        characters: selectedCharacters,
      };

      Toast.show({
        type: "success",
        text1: "Time Criado!",
        text2: `O time ${teamName} foi criado com sucesso.`,
      });
      navigation.navigate("Home", { newTeam });
    }
  };

  const handleSelectCharacter = (character: any) => {
    if (selectedCharacters.some((char: { id: any }) => char.id === character.id)) {
      Toast.show({
        type: "error",
        text1: "Lutador já selecionado",
        text2: `${character.name} já está no time.`,
      });
    } else if (selectedCharacters.length >= 6) {
      Toast.show({
        type: "error",
        text1: "Limite de Lutadores",
        text2: "Você só pode selecionar até 6 lutadores.",
      });
    } else {
      animateSelection(); // Iniciar animação
      navigation.navigate("CharacterDetails", { character, selectedCharacters });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seus lutadores</Text>

      <TextInput
        placeholder="Nome do Time"
        placeholderTextColor="#888"
        style={styles.input}
        value={teamName}
        onChangeText={setTeamName}
      />

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={{ height: 400 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelectCharacter(item)}
            style={styles.characterCard}
          >
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
              <Image source={item.portrait} style={styles.characterImage} /> 
              <Text style={[styles.characterName, { color: getClassColor(item.class) }]}>
                {item.name}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        )}
      />

      <Text
        style={{ marginTop: 20, color: selectedCharacters.length < 4 ? "#EF4444" : "#22C55E" }}
      >
        {selectedCharacters.length} / 6 lutadores selecionados
      </Text>

      <FlatList
        horizontal
        data={selectedCharacters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.selectedCharacterContainer}>
            <Image source={item.icon} style={styles.selectedCharacterIcon} />
            <Text style={[styles.selectedCharacterName, { color: getClassColor(item.class) }]}>
              {item.name}
            </Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveCharacter(item.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.readyButton}
        onPress={handleCreateTeam}
        disabled={selectedCharacters.length < 3 || !teamName.trim()}
      >
        <Text style={styles.readyButtonText}>Pronto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterSelection;
