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
        width: '93%',
        marginBottom: 10,
        height: 60,
    },

    subTitle: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    buttons: {
        backgroundColor: '#FFAC2C',
        width: 300,
        height: 60,
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    productList: {
        width: '90%',
    },

    product: {
        backgroundColor: '#eaeaea',
        borderWidth: 2,
        borderColor: "#b2b2b2",
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productText: {
        fontWeight: 'bold',
        fontSize: 14
    }

});