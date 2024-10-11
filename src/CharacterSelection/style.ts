// ======== > src/CharacterSelection/style.ts < ========
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  characterCard: {
    margin: 10,
    opacity: 1,
  },
  characterImage: {
    width: 100,
    height: 180,
  },
  characterName: {
    textAlign: "center",
    color: "#fff",
  },
  readyButton: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  readyButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  selectedCharacterContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedCharacterIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  selectedCharacterName: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  // Estilo para o botão de remover lutador
  removeButton: {
    backgroundColor: "#EF4444",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});
