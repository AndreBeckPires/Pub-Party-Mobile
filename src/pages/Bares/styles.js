import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#121212'

    },
    images: {
        height: '50%',
        width: 400,
        paddingBottom: 200,
    },
    textH1: {
        color:'#D3CEC4',
        fontSize: 32,
        paddingBottom: 100,
        paddingTop: 10,

    },
    back: {
        color: "#D3CEC4",
        paddingRight: 330,
        fontSize: 40,
        paddingBottom: 260,
    },
    group: {
        color: "#D3CEC4",
        fontSize: 40,
        paddingTop: 360,
    },
    text: {
        color: "#D3CEC4",
        fontSize: 16,
        


    },
    

});