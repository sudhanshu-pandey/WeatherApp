import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    forecastItem: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginRight: 10,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        height: 150,
        justifyContent: 'center',
        gap: 5
      },
      forecastText: {
        fontSize: 16,
      },
      hourlyIcon: {
        width: 50,
        height: 50,
      },
});

export default styles;