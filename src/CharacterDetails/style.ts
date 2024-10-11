// ======== > style.ts < ========
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  characterImage: {
    width: 150,
    height: 220,
    alignSelf: 'center',
    marginVertical: 20,
  },
  detailsCard: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 8,
  },
  detailsText: {
    color: '#fff',
    marginBottom: 10,
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 4,
    borderRadius: 8, // Bordas levemente arredondadas para visual mais agradável
    borderWidth: 1, // Linha de borda para destacar o ícone
    borderColor: "#ccc", // Cor da borda em cinza claro
  },
  chooseButton: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  chooseButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  arrowIcon: {
    marginHorizontal: 5, // Para dar um espaçamento entre as imagens e a seta
  },
});
