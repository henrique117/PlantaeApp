import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    
  },

  borderbox: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderBottomWidth: 0.2,
    marginBottom: 10,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    opacity: 1,
  },
  rowSearch: {
    flexDirection: "row",
    borderRadius: 0.5,
    borderColor: colors.black,
    margin: 10,
    alignItems: "center",
    borderWidth: 0.2,
    width: Dimensions.get("window").width - 20,
    height: 45
  },

  icon: {
    fontSize: 15,
    marginLeft: 10,
    padding: 10,
    color: colors.gray
  },

  imagem:{
    alignItems: 'center',
    height: 250
  },

  viewimage:{
    backgroundColor: colors.white,
  },

  nutriFal: {
    paddingVertical: 2,
    width: 50,
    borderRadius: 10,
    textAlign: "center",
  },

  nutriFalText: {
    backgroundColor: colors.lightGreen,
  },

  configNutri: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },

})

export default styles;