import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    resizeMode: "cover",
  },

  container2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: "2%",
    paddingTop: "5%",
    paddingBottom: "5%",
  },



  textlocal: {
    fontSize: 14,
    marginLeft: "2%",
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  nutriente: {
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    paddingLeft: "1%",
    borderRadius: 5,
    marginLeft: "2.3%", 
    marginBottom: "2%",
    width: '14%',
    paddingTop: "2%",
    paddingBottom: "2%",
    justifyContent: 'center',
    alignItems: 'center',
  },

  nutrientetext: {
    fontSize: 14,
  },

  titlebold: {
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: 'center',
    color: colors.black,
    marginLeft: 10,
  },

  row: {
    paddingTop: 10,
    flexDirection:'row',
    backgroundColor: colors.white,
  },
  subtitle: {
    fontSize: 12,
    textAlignVertical: 'center',
    justifyContent: "center",
    color: colors.black2,
    marginLeft: 10,
  },
  link: {
    fontSize: 20
  },
  img: {
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 40,
    },
})

export default styles