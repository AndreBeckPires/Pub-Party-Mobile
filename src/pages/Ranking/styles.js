import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#121212'
    },

    buttons: {
        backgroundColor: '#FFAC2C',
        width: '48%',
        height: 40,
        margin: 5,
        marginTop: 0,
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

    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    labelStyle: {
        color: '#fff',
        fontWeight: 'bold'
    },

    scoreStyle: {
        color: '#fff',
        fontWeight: 'bold'
    },

    rankStyle: {
        color: '#FFAC2C'
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    topUser: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 30
    },

    topUserImg: {
        width: 50,
        height: 50,
    },

    topUserName: {
        color: '#fff',
        marginBottom: 4
    },

    topUser1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 0
    },

    topUserImg1: {
        width: 80,
        height: 80,
    },

});