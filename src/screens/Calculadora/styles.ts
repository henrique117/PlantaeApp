import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    borderbox:{
        flexDirection: "row",
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderBottomWidth: 0.2,
        justifyContent: "center",
        paddingTop: 10,
        height: 50,
        opacity: 1,
    },

    textHeader: {
        fontSize: 20,
        
        fontWeight: 'bold',
        paddingLeft: 0,
        
    },
});

export default styles
