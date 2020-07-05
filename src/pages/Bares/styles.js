import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#121212'
    },

    telaBAR: {
        alignItems: 'center',
        height: '35%',
    },

    images: {
        height: '100%',
        width: '100%',
    },

    textH1: {
        color: '#D3CEC4',
        fontSize: 32,
        justifyContent: 'center',
    },

    back: {
        color: "#D3CEC4",
        paddingRight: '90%',
        fontSize: 40,
        backgroundColor: '#323F4B',
    },

    group: {
        color: "#D3CEC4",
        fontSize: 40,
    },

    text: {
        color: "#D3CEC4",
        fontSize: 16,
        marginTop: '10%',
    },

    texts: {
        color: "#D3CEC4",
        fontSize: 16,
        alignItems: 'center',
        marginTop: '10%',
    },
    modal: {
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor:'#121212',
    },
    titleModal: {
        color:'#D3CEC4',
        fontSize: 32,
        justifyContent: 'center',
 
    },
    backModal: {
        color: "#D3CEC4",
        paddingRight: '90%',
        fontSize: 40,
        backgroundColor: '#323F4B',
    },
    socialMedia: {
        flexDirection: 'row',
        margin: '110%',
       
    },
    mediaImages:{
        width: 40,
        height: 40,
        borderRadius: 400 / 2,
        marginLeft: 20,
        marginRight: 20,
        

    },
});