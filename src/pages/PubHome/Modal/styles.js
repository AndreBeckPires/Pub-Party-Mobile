import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    modalBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    sectionInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        lineHeight: 30
    },

    action: {
        backgroundColor: '#000',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actions: {
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

    qrCodeView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }

});