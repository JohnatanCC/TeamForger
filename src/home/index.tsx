import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getClassColor } from "../utils/classColors"; // Importar a lógica de cor
import useRandomTeam from "../hooks/useRandomTeam"; // Importar o hook

const HomeScreen = ({ navigation, route }: any) => {
  const [teams, setTeams] = useState<any[]>([]);
  const generateRandomTeam = useRandomTeam(); // Usar o hook para gerar time aleatório

  // Função para salvar os times no AsyncStorage
  const saveTeams = async (teams: any[]) => {
    try {
      await AsyncStorage.setItem("@teams", JSON.stringify(teams));
    } catch (error) {
      console.error("Erro ao salvar os times", error);
    }
  };

  // Função para carregar os times do AsyncStorage
  const loadTeams = async () => {
    try {
      const storedTeams = await AsyncStorage.getItem("@teams");
      if (storedTeams) {
        setTeams(JSON.parse(storedTeams));
      }
    } catch (error) {
      console.error("Erro ao carregar os times", error);
    }
  };

  // Carregar os times do AsyncStorage ao iniciar o componente
  useEffect(() => {
    loadTeams();
  }, []);

  // Atualizar o estado ao adicionar um novo time, sem duplicar
  useEffect(() => {
    if (route.params?.newTeam) {
      const existingTeam = teams.find(
        (team) => team.id === route.params.newTeam.id
      );
      if (!existingTeam) {
        const updatedTeams = [...teams, route.params.newTeam];
        setTeams(updatedTeams);
        saveTeams(updatedTeams); // Salvar os times no AsyncStorage
        Toast.show({
          type: "success",
          text1: "Novo Time Adicionado!",
          text2: "O time foi salvo com sucesso.",
        });
      }
    }
  }, [route.params?.newTeam]);

  // Função para deletar um time
  const handleDeleteTeam = (id: string) => {
    Alert.alert("Deletar Time", "Tem certeza que deseja deletar esse time?", [
      { text: "Cancelar" },
      {
        text: "Deletar",
        onPress: () => {
          const updatedTeams = teams.filter((team) => team.id !== id);
          setTeams(updatedTeams);
          saveTeams(updatedTeams); // Atualizar o AsyncStorage após deletar o time
          Toast.show({
            type: "error",
            text1: "Time Deletado!",
            text2: "O time foi removido com sucesso.",
          });
        },
      },
    ]);
  };

  // Função para gerar time aleatório
  const handleGenerateRandomTeam = () => {
    const randomTeam = generateRandomTeam();

    // Exibir toast de sucesso
    Toast.show({
      type: "success",
      text1: "Time Aleatório Gerado!",
      text2: "Um novo time foi gerado com sucesso.",
    });

    // Navegar para Home com o time gerado
    navigation.navigate("Home", {
      newTeam: {
        id: Date.now().toString(),
        name: "Time Aleatório",
        characters: randomTeam,
      },
    });
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Seus times</Text>

      {/* Botão para criar time */}
      <TouchableOpacity
        style={styles.createTeamButton}
        onPress={() => navigation.navigate("CharacterSelection")}
      >
        <Text style={styles.createTeamButtonText}>Criar time</Text>
      </TouchableOpacity>

      {/* Botão para gerar time aleatório */}
      <TouchableOpacity
        style={styles.randomTeamButton}
        onPress={handleGenerateRandomTeam}
      >
        <Text style={styles.randomTeamButtonText}>Gerar Time Aleatório</Text>
      </TouchableOpacity>

      {teams.length === 0 ? (
        <Text style={styles.emptyMessage}>
          Nenhum time criado. Crie um novo time de até 6 lutadores.
        </Text>
      ) : (
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.teamCard}>
              <Text style={styles.teamCardText}>{item.name}</Text>
              <FlatList
                horizontal
                data={item.characters}
                keyExtractor={(character) => character.id}
                renderItem={({ item: character }) => (
                  <View style={styles.characterContainer}>
                    <Image
                      source={character.icon} // Agora utilizando o portrait
                      style={styles.characterIcon}
                    />
                    <Text
                      style={[
                        styles.characterName,
                        { color: getClassColor(character.class) },
                      ]}
                    >
                      {character.name}
                    </Text>
                  </View>
                )}
              />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTeam(item.id)}
              >
                <FontAwesome name="trash" size={20} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() =>
                  navigation.navigate("TeamDetails", { team: item })
                }
              >
                <Text style={styles.viewDetailsButtonText}>Ver Detalhes </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
