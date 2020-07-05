import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 60,
        backgroundColor: '#121212',
    },

    images: {
        width: 72,
        height: 72,
        borderRadius: 400 / 2,
        margin: 16,
    },

    headerBar: {
        backgroundColor: '#1F2933',
        position: 'absolute',
        height: Constants.statusBarHeight + 60,
        paddingTop: 22,
        flexDirection: 'row',
        top: 0,
        right: 0,
        left: 0
    },

    filtersView: {
        height: 60,
        backgroundColor: '#323F4B',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconsView: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },

    filterIcon: {
        margin: 16,
    },

    iconButtons: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

    barName: {
        color: 'white',
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 4
    },

    barLocation: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 4
    },

    barOpen: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        marginBottom: 4
    },

    barTextView: {
        flexDirection: 'column',
        color: 'white',
    },

    bares: {
        width: 350,
        flexDirection: 'row',
        backgroundColor: '#323F4B',
        margin: 8,
        borderRadius: 4,
        padding: 8
    },
    
    dropdown: {
        width: '90%',
        marginBottom: 10,
        height: 56,
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
        paddingLeft: '10%',
        paddingRight: '8%',
        fontSize: 40,
        backgroundColor: '#323F4B',
    },
    groupNameText: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '12%',
        marginTop: '12%',
    },
    nameText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 12,
 
    },
    members: {
        margin: '5%',
    },
    headerModal:{
        color: "#D3CEC4",
        paddingRight: '30%',
        paddingLeft: '5%',
        backgroundColor: '#323F4B',
        fontSize: 32,
    },
    credits: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 12,
        marginTop: '40  %',
    },
    creditsText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
    viewDosCreditos: {
        marginTop: '20%',
    }
});