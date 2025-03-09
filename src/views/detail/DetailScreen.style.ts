import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2f3',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  arrowButton: {
    alignSelf:'flex-start'
  },
  backArrowIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -25
  },
  icon: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  temp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff5733',
  },
  condition: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
  },
  hourlyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  hourlyContainer: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  }
});

export default styles;
