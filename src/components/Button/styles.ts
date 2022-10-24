import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonGreen: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: 0,
    borderColor: colors.secondary,
    borderWidth: 0.5,
    borderRadius: 15,
    margin: 10, 
    height: '20%',
    width: '70%'
  },
  buttonPurple: {
    fontWeight: "normal",
    backgroundColor: colors.secondary,
    borderRadius: 8,
    margin: 10,
  },
  buttonThird: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    margin: 10,
    width: '90%'
  },
  text: {
    color: colors.white,
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
});

export default styles;