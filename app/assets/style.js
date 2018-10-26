import {
    StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#FFF',
      paddingTop: 20
    },
    headline: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#58595B'
    },
    input: {
        height: 50,
        marginTop: 30,
        padding: 10,
        margin: 10,
        fontSize: 18
    },
    buttonText: {
        margin: 10,
        backgroundColor: '#00BBE7',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#58595B',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    error: {
        color: '#FF0000',
        fontSize: 20,
        padding: 10
    },
    qrContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qrCode: {
        width: 220,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dataText: {
        flex: 1,
        fontSize: 13,
        flexWrap: 'wrap',
        backgroundColor: 'white',
        fontWeight: 'bold',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5
        
    },
    dataTextRight: {
        flex: 1,
        fontSize: 13,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5

    },
})