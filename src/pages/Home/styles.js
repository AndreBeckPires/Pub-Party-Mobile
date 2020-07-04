import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#121212',
    },
    images: {
        width: 72,
        height: 72, 
        borderRadius: 400/2,
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
        fontSize:48,
        

    },
    baresText: {
        color: "#D3CEC4",
        fontSize: 24,
    }

});