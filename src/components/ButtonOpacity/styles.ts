import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonTransparente: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: 0,
    borderColor: colors.secondary,
    borderWidth: 0.5,
    borderRadius: 15,
    margin: 10, 
    width: '70%'
  },

  text: {
    color: colors.secondary,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    marginTop: 0,
    fontSize: 15
  }
});

export default styles;