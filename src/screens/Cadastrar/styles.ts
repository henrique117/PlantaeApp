import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white
  },

  title: {
    marginTop:150,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.black,
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:10,
    paddingBottom: 20
  },

  signupText:{
    fontWeight: 'bold',
  },
  
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.black,
    borderRadius: 5,
  },

  input: {
    fontSize: 18,
    padding: 5,
    width: "80%",
    color: colors.black,
  },

  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  icon: {
    fontSize: 24,
    color: colors.black,
    padding: 10
  },
})

export default styles;