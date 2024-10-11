// ======== > src/TeamDetails/index.tsx < ========
import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./style";
import { getClassColor } from "../utils/classColors"; // Importar a lógica de cor
import { FontAwesome } from "@expo/vector-icons"; // Importar o ícone de seta
const TeamDetails = ({ route }: any) => {
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{team.name}</Text>

      <FlatList
        data={team.characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.characterDetailsContainer}>
            {/* Utilizando o portrait no lugar do ícone */}
            <Image source={item.portrait} style={styles.characterImage} />

            <Text style={styles.characterName}>{item.name}</Text>
            <Text
              style={[
                styles.characterClass,
                { color: getClassColor(item.class) },
              ]}
            >
              Classe: {item.class}
            </Text>
            <Text style={styles.characterDetails}>Vida: {item.health}</Text>
            <Text style={styles.characterDetails}>
              Equipamentos: {item.equipament}
            </Text>
            <Text style={styles.characterDetails}>
              Especial: {item.special}
            </Text>

            {/* Exibir itens de armadura e arma */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              {/* Exibir as imagens dos itens com ícones de seta entre elas */}
              <Image source={item.items.bodyArmor} style={styles.itemIcon} />
              <Image source={item.items.weapon} style={styles.itemIcon} />
              <FontAwesome
                name="arrow-right"
                size={20}
                color="#fff"
                style={styles.arrowIcon}
              />
              <Image source={item.items.bodyArmorLv2} style={styles.itemIcon} />
              <Image source={item.items.headArmor} style={styles.itemIcon} />
              <Image source={item.items.weaponLv2} style={styles.itemIcon} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TeamDetails;
