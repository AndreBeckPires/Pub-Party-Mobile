import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 60,
        backgroundColor: '#121212',
    },

    images: {
        width: 72,
        height: 72,
        borderRadius: 400 / 2,
        margin: 23,
    },

    bares: {
        width: 343,
        height: 118,
        backgroundColor: '#323F4B',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        fontSize: 48,
    },

    baresText: {
        color: "#D3CEC4",
        fontSize: 24,
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

});