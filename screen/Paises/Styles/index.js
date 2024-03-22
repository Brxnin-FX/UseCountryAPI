import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 16,
    },
    searchContainer: {
        width: '100%',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 8,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 20
    },
    tableRow: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    rowText: {
        fontSize: 17,
        marginHorizontal: 20
    },
    actionButtons: {
        flexDirection: 'row',
        marginTop: 16,
    },
    modalContainer: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        elevation: 5,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
        backgroundColor: '#dcdcdc',
        padding: 8,
    },
    btn_cancelar: {
        backgroundColor: '#808080',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginVertical: 10,
        backgroundColor: 'red'
    },
    btn_salvar: {
        backgroundColor: '#808080',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginVertical: 10,
        backgroundColor: 'green'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;