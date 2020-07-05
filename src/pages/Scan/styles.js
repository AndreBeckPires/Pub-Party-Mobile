import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },

    scanner: {
        width: '100%',
        marginTop: Constants.statusBarHeight + 24,
        height: '80%',
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
});