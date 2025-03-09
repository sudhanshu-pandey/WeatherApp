import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical: 75,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noItemsText: {
      fontSize: 18,
      color: '#666',
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginVertical: 10,
    },
    item: {
      backgroundColor: '#f0f0f0',
      padding: 5,
    },
    itemText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    flatlistContainer: {
      marginTop: 10
    }
  });

  export default styles;