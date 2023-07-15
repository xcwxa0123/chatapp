import React, { useState } from "react";
import axios from 'axios';
import { View, StyleSheet, TextInput, FlatList, Alert, Modal, Text, TouchableHighlight } from "react-native";
import { Button } from '@rneui/themed';
import ChatMsgCard from "../components/chatMsgCard";
import MyMsgCard from "../components/myMsgCard";
import FreshBtn from "../components/freshBtn";


const chatMain = () => {
    const [value, onChangeText] = useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [sendMsgDisabled, setSendMsgDisabled] = useState(false);
    const [chatData, setChatData] = useState([])
    const sendMsg = async (value) => {
        onChangeText('')
        chatData.push({ role: 'user', content: value })
        setChatData(chatData)
        setLoading(true)
        setSendMsgDisabled(true)
        const msgData = {
            model: "gpt-3.5-turbo",
            messages: chatData
        }
        try {
            const result = await axios.post('http://www.yuri.services/chatmiddleApi/api/getChatCompletions', { msgData })
            chatData.push({ role: 'assistant', content: result.data })
            setChatData(chatData)
        } catch (error) {
            chatData.pop()
            setChatData(chatData)
            setModalVisible(true)
        } finally {
            setLoading(false)
            setSendMsgDisabled(false)
        }

    }

    const getRenderItem = (item) => {
        if(item.role == 'user'){
            return (
                <MyMsgCard style={styles.msgR} msg={item.content}></MyMsgCard>
            )
        } else {
            return (
                <ChatMsgCard style={styles.msgL} msg={item.content}></ChatMsgCard>
            )
        }
    }

    const renderItem = ({ item }) => (
        getRenderItem(item)
    )

    return (
        <View style={styles.container}>
            <FreshBtn clearHistory={ () => setChatData([]) }></FreshBtn>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("弹窗关咯");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>AI脑袋转不过来啦，请重新发送。要是还不行就刷新后重新发送。</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>关闭</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <FlatList contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }} renderItem={ renderItem } data={chatData} />
            <TextInput
                style={styles.textInput}
                placeholder="输入内容"
                onChangeText={text => onChangeText(text)}
                value={value}
            >
            </TextInput>
            <Button title="发送" onPress={() => sendMsg(value)} loading={loading} disabled={sendMsgDisabled}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(246, 253, 255, 0.72)',
        justifyContent: 'flex-end',
        padding: 16,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default chatMain