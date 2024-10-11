// ======== > src/home/style.ts < ========
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#09090B'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  createTeamButton: {
    backgroundColor: '#F97316',
    padding: 10,
    borderRadius: 8,
    marginVertical: 20,
  },
  createTeamButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  emptyMessage: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  teamCard: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    position: 'relative',
  },
  teamCardText: {
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  characterContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  characterIcon: {
    width: 50,
    height: 50,
  },
  characterName: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#EF4444',
    padding: 8,
    borderRadius: 8,
  },
  viewDetailsButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  viewDetailsButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  randomTeamButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  randomTeamButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
