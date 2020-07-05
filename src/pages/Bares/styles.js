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
        width: 380,
        height: '40%',
    },

    images: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
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
        color: "#fff",
        fontSize: 40,
    },

    text: {
        color: "#D3CEC4",
        fontSize: 16,
        marginTop: '5%',
    },

    texts: {
        color: "#D3CEC4",
        fontSize: 16,
        alignItems: 'center',
        marginTop: '5%',
    },

    modal: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#121212',
        width: '100%',
        margin: 0,
        paddingTop: Constants.statusBarHeight + 20,
    },

    titleModal: {
        color: '#D3CEC4',
        fontSize: 32,
        justifyContent: 'center',
        padding: 8
    },

    backModal: {
        color: "#D3CEC4",
        paddingRight: '90%',
        fontSize: 40,
        backgroundColor: '#323F4B',
    },

    socialMedia: {
        flexDirection: 'row',
        margin: '40%',
    },

    mediaImages: {
        width: 40,
        height: 40,
        borderRadius: 400 / 2,
        marginLeft: 20,
        marginRight: 20,
    },

    dropdown: {
        width: '100%',
        marginBottom: 10,
        height: 56,
        color: "#D3CEC4",
    },

    productList: {
        width: '100%',
    },

    partyButton: {
        flexDirection: 'row',
        backgroundColor: '#FFAC2C',
        padding: 8,
        borderRadius: 4
    },

    partyButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8
    },

    buttons: {
        backgroundColor: '#FFAC2C',
        width: '48%',
        height: 40,
        margin: 5,
        marginTop: 40,
        marginBottom: 10,
        padding: 5,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

    labelNome: {
        color: 'white',
        fontSize: 20,
        lineHeight: 30,
        margin: 8,
        marginBottom: 0,
        fontWeight: 'bold',
    },

    labelHoras: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 4
    },

    labelAs: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '100',
    }

});