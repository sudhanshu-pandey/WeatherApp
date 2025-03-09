import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hourlyCard: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    borderRadius: 10,
    elevation: 4,
    width: 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginVertical: 10,
  },
  hourlyIcon: {
    width: 50,
    height: 50,
  },
  hourText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  tempText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5733',
  },
});

export default styles;
