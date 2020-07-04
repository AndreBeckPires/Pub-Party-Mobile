import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#F8F8F2'
    },

    buttons: {
        backgroundColor: '#324c22',
        width: '48%',
        height: 40,
        margin: 5,
        marginBottom: 10,
        padding: 5,
        borderRadius: 8,
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

});