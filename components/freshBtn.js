import Icon from 'react-native-vector-icons/Octicons';
import { StyleSheet, View, TouchableOpacity } from "react-native";
const freshBtn = ({ clearHistory }) => {
    return (
        <View style={styles.bk}>
            <TouchableOpacity onPress={ clearHistory }>
                <View style={styles.sque}>
                    <Icon name="sync" size={30} color="rgba(255, 255, 255, 1)" />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    bk: {
        marginTop: 10,
        alignItems: 'flex-end',
        padding: 10,
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    sque: {
        padding: 10,
        backgroundColor: 'rgba(0, 153, 185, 1)',
        borderRadius: 10,
        color: 'rgba(255, 255, 255, 1)',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})
export default freshBtn