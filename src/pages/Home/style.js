import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    tittleContainer: {
        paddingVertical: "10%"
    },

    homeContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
       
    },

    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 50,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '2%',
        paddingTop: '10%',
    },

    listContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: '2%',
        margin: '2%',
        borderRadius: 10
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },

    centerIten:{
        alignItems: 'center',
        padding: '5%'
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    space: {
        padding: "10%",
    },

    space1: {
        padding: "5%",
    },

    spaceRanking: {
        paddingTop: "30%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    spaceRanking2: {
        paddingTop: "10%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    spaceModal: {
        padding: "2%",
    },

    spaceHome: {
        paddingTop: "100%",
    },

    spaceHomeVertical:{
        paddingVertical: "50%",
    },
    minorSpaceHomeVertical:{
        paddingVertical: "20%",
    },
    modalItems: {
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: '#000000',
        borderRadius: 50,
        padding: 10,
        elevation: 2,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: "10%"
    },

    notaContainer:{
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderColor: '#000000',
        borderWidth: 2,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})