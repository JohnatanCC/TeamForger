// ======== > src/CharacterDetails/index.tsx < ========
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Toast from "react-native-toast-message";
import { getClassColor } from "../utils/classColors"; // Para colorir com base na classe do personagem
import { FontAwesome } from "@expo/vector-icons"; // Importar o ícone de seta

const CharacterDetails = ({ route, navigation }: any) => {
  const { character, selectedCharacters } = route.params;

  const handleAddCharacter = () => {
    const updatedSelection = [...selectedCharacters, character];
    Toast.show({
      type: "success",
      text1: "Lutador Selecionado!",
      text2: `${character.name} foi adicionado ao time.`,
    });
    navigation.navigate("CharacterSelection", {
      selectedCharacters: updatedSelection,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do lutador</Text>

      {/* Agora utilizamos o portrait no lugar do ícone */}
      <Image source={character.portrait} style={styles.characterImage} />

      <View style={styles.detailsCard}>
        <Text style={styles.detailsText}>Nome: {character.name}</Text>
        <Text
          style={[
            styles.detailsText,
            { color: getClassColor(character.class) },
          ]}
        >
          Classe: {character.class}
        </Text>
        <Text style={styles.detailsText}>Vida: {character.health}</Text>
        <Text style={styles.detailsText}>
          Equipamentos: {character.equipament}
        </Text>
        <Text style={styles.detailsText}>Especial: {character.special}</Text>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          {/* Exibir as imagens dos itens com ícones de seta entre elas */}
          <Image source={character.items.bodyArmor} style={styles.itemIcon} />
          <Image source={character.items.weapon} style={styles.itemIcon} />
          <FontAwesome
            name="arrow-right"
            size={20}
            color="#fff"
            style={styles.arrowIcon}
          />
          <Image
            source={character.items.bodyArmorLv2}
            style={styles.itemIcon}
          />
          <Image source={character.items.headArmor} style={styles.itemIcon} />
          <Image source={character.items.weaponLv2} style={styles.itemIcon} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.chooseButton}
        onPress={handleAddCharacter}
      >
        <Text style={styles.chooseButtonText}>Escolher Lutador</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterDetails;
