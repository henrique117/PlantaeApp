import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "white",
    resizeMode: "cover",
  },

  titlebold: {
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: 'center',
    color: colors.black,
    marginLeft: 10,
  },

  row: {
    paddingTop: 0,
    flexDirection:'row',
    
    width: Dimensions.get("window").width,
    backgroundColor: colors.white,
  },
  subtitle: {
    fontSize: 13,
    textAlignVertical: 'center',
    justifyContent: "center",
    color: colors.black2,
    marginLeft: 10,
  },

  iconview:{
    marginTop: 10,
    
    flex: 1, 
    flexDirection: 'row',
    justifyContent: "flex-start"
  },
  icon: {
    marginLeft: 10,
    paddingLeft: 28,
    
    backgroundColor: "#d3d3d3",
    height: "95%",
    width: "20%",
    borderRadius: 20,
    padding: 5
  },

  link: {
    fontSize: 20
  },
  img: {
    marginLeft: 0,
    width: 70,
    height: 70,
    borderRadius: 0,
    },
})

export default styles;