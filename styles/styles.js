import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#313131',
        borderTopWidth: 4,
        borderColor: '#909090'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
       	borderBottomWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'white'
    },
    rowText: {
        fontSize: 20,
        marginLeft: 5,
        color: 'white'
    },
    headerNavButton: {
        color: 'black',
        backgroundColor: '#909090',
        borderRadius: 5,
        marginRight: 6,
        marginLeft: 'auto',
        fontSize: 32,
        padding: 4
    },
    navButton: {
        color: 'white',
        marginRight: 5,
        marginLeft: 'auto',
        fontSize: 24,
        padding: 4
    },
    newTask: {
	    alignContent: 'center',
	    fontSize: 32,
	    margin: 10,
	    color: 'white'
    },
});

export default styles;
