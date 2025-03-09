import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 75,
      backgroundColor: '#F3F4F6',
    },
    loader: {
      marginTop: 20,
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
    },
    selectCityText: {
      textAlign: 'center',
      fontSize: 18,
      marginTop: 20,
      color: '#333',
    },
    tempContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    textInput: {
      borderWidth: 0.5,
      padding: 10,
      borderRadius: 5,
      width: 50,
      textAlign: 'center',
    },
    temperatureText: {
      fontSize: 60,
      fontWeight: 'bold',
    },
    icon: {
      height: 64,
      width: 64,
    },
    conditionText: {
      textAlign: 'center',
      fontSize: 18,
      color: '#555',
      marginTop: 5,
    },
    weatherforcastTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 15,
      marginTop: 40,
      alignItems: 'center',
    },
    forecastTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#007AFF',
    },
    forecastList: {
      paddingHorizontal: 10,
    },
  });

  export default styles;