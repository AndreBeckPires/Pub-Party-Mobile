import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    modalBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#323F4B',
        marginBottom: 16,
    },

    sectionInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        marginBottom: 16
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        lineHeight: 30,
        marginBottom: 4
    },

    action: {
        backgroundColor: '#FFAC2C',
        borderRadius: 4,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actions: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

});