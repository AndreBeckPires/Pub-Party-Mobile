import { StyleSheet } from 'react-native';
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

    dropdown: {
        width: '90%',
        marginBottom: 10,
        height: 56,
    },

    title: {
        color: '#FFAC2C',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    buttons: {
        backgroundColor: '#FFAC2C',
        width: 300,
        height: 50,
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    productList: {
        width: '90%',
    },

    product: {
        backgroundColor: '#323F4B',
        borderWidth: 2,
        borderColor: "#b2b2b2",
        padding: 10,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    }

});