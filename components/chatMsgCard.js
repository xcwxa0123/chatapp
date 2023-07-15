import { Text } from '@rneui/themed';
import { StyleSheet, View } from "react-native";
const chatMsgCard = ({ msg }) => {
    return (
        <View style={styles.msgContainer}>
            <Text>
                {msg}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    msgContainer: {
        width: 270,
        marginBottom: 0,
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
        padding: 10,
        backgroundColor: 'lightgray',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
            width: 0.3125,
            height: -0.1875
        },
        shadowOpacity: 1,
        shadowRadius: 0.1875,
        elevation: 2,
        backgroundColor: 'rgba(178, 221, 231, 0.7)',
        borderRadius: 10
    },
})
export default chatMsgCard