import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    content:{
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 30,
        lineHeight: 36,
        marginTop: 160,
    },

    description:{
        marginTop:22,
        color: '#FFF',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        maxWidth:180,
    },

    okButton: {
        marginVertical: 40,
        height: 58,
        backgroundColor: '#04D361',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
    },

    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,
    },

    
});

export default styles;