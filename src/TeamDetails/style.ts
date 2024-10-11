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
    textAlign: "center",
    marginBottom: 20,
  },
  characterDetailsContainer: {
    marginBottom: 20,
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
  },
  characterImage: {
    width: 200,
    height: 280,
    alignSelf: "center",
    marginBottom: 10,
  },
  characterName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  characterClass: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  characterDetails: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginTop: 5,
  },
  itemIcon: {
    width: 50, // Definir a largura da imagem
    height: 50, // Definir a altura da imagem
    marginHorizontal: 4, // Espaçamento à direita entre os itens
    borderRadius: 8, // Bordas levemente arredondadas para visual mais agradável
    borderWidth: 1, // Linha de borda para destacar o ícone
    borderColor: "#ccc", // Cor da borda em cinza claro
  },
  arrowSeparator: {
    fontSize: 18,         // Tamanho da seta
    marginHorizontal: 5,  // Espaçamento lateral
    color: '#999999',     // Cor da seta (pode ser ajustado conforme o tema)
    alignSelf: 'center',  // Centraliza a seta verticalmente
  },
  arrowIcon: {
    marginHorizontal: 5, // Para dar um espaçamento entre as imagens e a seta
  },
});
